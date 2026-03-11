import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coryfox.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cory Fox | Product Designer",
    template: "%s | Cory Fox"
  },
  description:
    "I’m Cory Fox, a Product Designer working across UX, visual systems, and digital experiences shaped by clarity-first thinking.",
  openGraph: {
    title: "Cory Fox | Product Designer",
    description:
      "Product, UX, and visual design work shaped by SaaS experience, clarity-first thinking, and inclusive design practice.",
    url: siteUrl,
    siteName: "Cory Fox",
    type: "website"
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
