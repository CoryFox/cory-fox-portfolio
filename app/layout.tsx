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
    default: "Cory Fox | Learning Technology & Implementation",
    template: "%s | Cory Fox"
  },
  description:
    "Cory Fox combines Aptem platform implementation with eLearning development at Relish Learning, Articulate Storyline, SCORM, reporting, UX, and teaching.",
  keywords: [
    "Cory Fox",
    "implementation consultant",
    "learning technology",
    "Aptem",
    "Power Query",
    "Relish Learning",
    "Articulate Storyline",
    "SCORM",
    "digital learning",
    "onboarding",
    "workflow design",
    "product enablement",
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
    title: "Cory Fox | Learning Technology & Implementation",
    description:
      "Aptem implementation, Relish Learning eLearning development, SCORM, Articulate Storyline, reporting, and learner experience.",
    url: siteUrl,
    siteName: "Cory Fox",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Cory Fox | Learning Technology & Implementation",
    description:
      "Aptem implementation, Relish Learning eLearning development, SCORM, Articulate Storyline, reporting, and learner experience."
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
