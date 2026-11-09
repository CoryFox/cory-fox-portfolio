import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./fonts/montserrat-latin.woff2",
  variable: "--font-display",
  weight: "500 800",
  style: "normal",
  display: "swap"
});

const sans = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-sans",
  weight: "400 700",
  style: "normal",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coryfox.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Cory Fox Portfolio",
  title: {
    default: "Cory Fox | AI Implementation & Transformation",
    template: "%s | Cory Fox"
  },
  description:
    "Cory Fox is an Implementation Consultant at Aptem working on AI transformation, cross-platform automation, and process improvement, backed by software development, UX, and teaching.",
  keywords: [
    "Cory Fox",
    "AI implementation",
    "AI transformation",
    "implementation consultant",
    "workflow automation",
    "cross-platform automation",
    "process improvement",
    "user adoption",
    "Aptem",
    "software development",
    "UX",
    "SaaS"
  ],
  authors: [{ name: "Cory Fox", url: siteUrl }],
  creator: "Cory Fox",
  publisher: "Cory Fox",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  openGraph: {
    title: "Cory Fox | AI Implementation & Transformation",
    description:
      "AI transformation at Aptem, cross-platform automation, technical delivery, and user adoption. A background spanning software development, UX, and teaching.",
    url: siteUrl,
    siteName: "Cory Fox",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Cory Fox | AI Implementation & Transformation",
    description:
      "AI transformation at Aptem, cross-platform automation, technical delivery, and user adoption. A background spanning software development, UX, and teaching."
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-[family-name:var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}
