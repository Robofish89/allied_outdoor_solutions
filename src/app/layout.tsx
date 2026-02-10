import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allied Outdoor Solutions — AI Strategy Showcase",
  description:
    "10 AI-powered solutions to transform Allied Outdoor Solutions' sales, marketing, and operations",
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
