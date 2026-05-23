# deploy.ps1 — Quick commit & push script for ImportWiz
# Usage: .\deploy.ps1 "Your commit message"

param(
    [string]$Message = "Update site"
)

Write-Host "🚀 Deploying ImportWiz..." -ForegroundColor Cyan

# Stage all changes
git add -A

# Check if there's anything to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ Nothing to commit — already up to date." -ForegroundColor Green
    exit 0
}

# Commit
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Commit failed." -ForegroundColor Red
    exit 1
}

# Push
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Push failed. Check your credentials." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Deployed! GitHub Pages will update in ~30–60 seconds." -ForegroundColor Green
Write-Host "🌐 View at: https://maatifarms.github.io/importwiz/" -ForegroundColor Cyan
