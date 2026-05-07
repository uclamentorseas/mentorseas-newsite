import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "MentorSEAS — UCLA Engineering Mentorship",
  description:
    "Mentorship for the next generation of Bruins. Built by UCLA engineering students who remember what it felt like.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-paper text-ink min-h-dvh selection:bg-accent/25 selection:text-ink">
        <div className="grain pointer-events-none fixed inset-0 z-60 opacity-[0.045] mix-blend-multiply" />
        {children}
      </body>
    </html>
  );
}
