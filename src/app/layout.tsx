import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alliedoutdoorsolutions.vercel.app"),
  title: "Allied Outdoor Solutions — AI Strategy Showcase",
  description:
    "10 AI-powered solutions to transform Allied Outdoor Solutions' sales, marketing, and operations across Austin, Dallas, Fort Worth, Houston, and San Antonio.",
  openGraph: {
    title: "Allied Outdoor Solutions — AI Strategy Showcase",
    description:
      "10 AI-powered solutions to transform Allied Outdoor Solutions' sales, marketing, and operations across Austin, Dallas, Fort Worth, Houston, and San Antonio.",
    type: "website",
    url: "https://alliedoutdoorsolutions.vercel.app",
    siteName: "Allied Outdoor Solutions AI Showcase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allied Outdoor Solutions — AI Strategy Showcase",
    description:
      "10 AI-powered solutions to transform Allied Outdoor Solutions' sales, marketing, and operations across Austin, Dallas, Fort Worth, Houston, and San Antonio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
