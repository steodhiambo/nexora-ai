import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexora AI — AI-Powered Growth Systems for Modern Businesses",
  description:
    "We help businesses automate lead generation, customer engagement, sales workflows, and operations using intelligent AI systems.",
  openGraph: {
    title: "Nexora AI — AI-Powered Growth Systems",
    description:
      "Transform leads into revenue with AI-powered growth systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
