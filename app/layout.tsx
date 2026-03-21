import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coryfox.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Cory Fox Portfolio",
  title: {
    default: "Cory Fox | Full Stack Developer",
    template: "%s | Cory Fox"
  },
  description:
    "Cory Fox is a full stack developer focused on frontend, UX design, and shipping clearer SaaS products.",
  keywords: [
    "Cory Fox",
    "full stack developer",
    "frontend developer",
    "UX developer",
    "product design",
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
    title: "Cory Fox | Full Stack Developer",
    description:
      "Full stack product work with a frontend and UX design bias, shaped by SaaS delivery, clarity-first thinking, and practical implementation.",
    url: siteUrl,
    siteName: "Cory Fox",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Cory Fox | Full Stack Developer",
    description:
      "Full stack product work with a frontend and UX design bias, shaped by SaaS delivery and clarity-first implementation."
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
