import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GA_ID = "G-C1YH0635JV"; // Replace with your Google Analytics 4 Measurement ID

export const metadata: Metadata = {
  title: "ImportWiz — Global Sourcing & Export Solutions",
  description:
    "ImportWiz simplifies global imports and product sourcing. Connect with verified suppliers across 25+ countries. 98% on-time delivery. Request a free quote today.",
  keywords:
    "global sourcing, product import, export solutions, import wizard, international trade, verified suppliers, B2B sourcing",
  authors: [{ name: "ImportWiz" }],
  metadataBase: new URL("https://importwiz.shop"),
  alternates: { canonical: "https://importwiz.shop" },
  openGraph: {
    type: "website",
    url: "https://importwiz.shop",
    siteName: "ImportWiz",
    title: "ImportWiz — Global Sourcing & Export Solutions",
    description:
      "Simplify global imports and product sourcing. Verified suppliers, 25+ countries, 98% on-time delivery.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ImportWiz" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImportWiz — Global Sourcing & Export Solutions",
    description:
      "Simplify global imports and product sourcing. Verified suppliers, 25+ countries.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
