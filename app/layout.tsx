import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xinyi Zhang — Wearable Systems Researcher",
  description: "Xinyi Zhang is a PhD student at HKUST building multimodal wearable systems for health and sports.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
