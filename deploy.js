// ImportWiz VPS Deployment Script
// Usage: node deploy.js
// Requires VPS_HOST, VPS_USER, VPS_PASSWORD in .env

const { Client } = require("ssh2");
const fs = require("fs");
const path = require("path");

// Load .env
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const idx = trimmed.indexOf("=");
      if (idx === -1) return;
      const k = trimmed.slice(0, idx).trim();
      const v = trimmed.slice(idx + 1).trim();
      if (k) process.env[k] = v;
    });
}

const CONN = {
  host: process.env.VPS_HOST,
  port: 22,
  username: process.env.VPS_USER,
  password: process.env.VPS_PASSWORD,
  readyTimeout: 20000,
};

const REMOTE_TMP = "/tmp/importwiz-deploy";
const OUT_DIR = path.join(__dirname, "site");

function ssh(client, cmd) {
  return new Promise((res, rej) => {
    client.exec(cmd, (err, stream) => {
      if (err) return rej(err);
      let out = "";
      stream.on("data", (d) => (out += d));
      stream.stderr.on("data", (d) => (out += d));
      stream.on("close", () => res(out.trim()));
    });
  });
}

function connect() {
  return new Promise((res, rej) => {
    const c = new Client();
    c.on("ready", () => res(c));
    c.on("error", rej);
    c.connect(CONN);
  });
}

function uploadDir(client, localDir, remoteDir) {
  return new Promise((res, rej) => {
    client.sftp((err, sftp) => {
      if (err) return rej(err);

      const files = [];
      function walk(dir, base) {
        const entries = fs.readdirSync(dir);
        for (const entry of entries) {
          const localPath = path.join(dir, entry);
          const remotePath = base + "/" + entry;
          if (fs.statSync(localPath).isDirectory()) {
            walk(localPath, remotePath);
          } else {
            files.push({ local: localPath, remote: remotePath });
          }
        }
      }
      walk(localDir, remoteDir);

      let done = 0;
      if (files.length === 0) return res();

      for (const f of files) {
        sftp.fastPut(f.local, f.remote, (err) => {
          if (err) {
            console.error(`  ✗ ${f.remote}: ${err.message}`);
          } else {
            console.log(`  ✓ ${path.relative(localDir, f.local)}`);
          }
          done++;
          if (done === files.length) {
            sftp.end();
            res();
          }
        });
      }
    });
  });
}

function mkdirRemote(client, dir) {
  return new Promise((res, rej) => {
    client.sftp((err, sftp) => {
      if (err) return rej(err);
      sftp.mkdir(dir, () => { sftp.end(); res(); });
    });
  });
}

async function run() {
  if (!CONN.host || !CONN.password || CONN.password === "your_new_password_here") {
    console.error("❌ Update VPS_PASSWORD in your .env file first, then run again.");
    process.exit(1);
  }

  console.log(`\n🚀 Deploying ImportWiz to ${CONN.host}...\n`);

  let client;
  try {
    client = await connect();
    console.log("✅ Connected to VPS\n");

    // Find nginx web root for importwiz.shop
    console.log("🔍 Finding importwiz.shop web root...");
    const nginxConf = await ssh(
      client,
      "grep -r 'importwiz' /etc/nginx/sites-enabled/ /etc/nginx/sites-available/ /etc/nginx/conf.d/ 2>/dev/null | grep -E 'root |server_name' | head -20"
    );
    console.log("Nginx config:", nginxConf || "(none found — using default)");

    // Extract root path or fallback
    const rootMatch = nginxConf.match(/root\s+(\/[^\s;]+)/);
    const WEB_ROOT = rootMatch ? rootMatch[1] : "/var/www/html";
    console.log(`\n📁 Web root: ${WEB_ROOT}\n`);

    // Create remote dirs
    console.log("📂 Preparing remote directories...");
    await ssh(client, `rm -rf ${REMOTE_TMP} && mkdir -p ${REMOTE_TMP}`);

    // Create all subdirectories
    const allDirs = new Set();
    function collectDirs(dir, base) {
      for (const entry of fs.readdirSync(dir)) {
        const lp = path.join(dir, entry);
        if (fs.statSync(lp).isDirectory()) {
          allDirs.add(base + "/" + entry);
          collectDirs(lp, base + "/" + entry);
        }
      }
    }
    collectDirs(OUT_DIR, REMOTE_TMP);
    for (const d of allDirs) {
      await ssh(client, `mkdir -p ${d}`);
    }

    // Upload files
    console.log("📤 Uploading files...");
    await uploadDir(client, OUT_DIR, REMOTE_TMP);

    // Merge new files into web root (preserves images/ and other existing files)
    console.log("\n🔄 Merging new files...");
    await ssh(client, `cp -r ${REMOTE_TMP}/. ${WEB_ROOT}/`);
    await ssh(client, `chown -R www-data:www-data ${WEB_ROOT}/ 2>/dev/null || true`);

    // Reload nginx
    console.log("🔃 Reloading nginx...");
    const reload = await ssh(client, "nginx -t && systemctl reload nginx");
    console.log(reload);

    // Cleanup
    await ssh(client, `rm -rf ${REMOTE_TMP}`);

    console.log("\n✅ Deployment complete! Visit https://importwiz.shop\n");
    client.end();
  } catch (err) {
    console.error("\n❌ Deployment failed:", err.message);
    if (client) client.end();
    process.exit(1);
  }
}

run();
