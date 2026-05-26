import type { Metadata } from "next";
import { Geist, Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    verification: {
    google: "GcZdsWt6iM5UTee72uNDC0fLzglPRg5F4vYGR3YMxDk",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", geistSans.variable, spaceGrotesk.variable, fraunces.variable, jetbrainsMono.variable)}
    >
      <body className="bg-paper text-ink min-h-dvh selection:bg-accent/25 selection:text-ink">
        <div className="grain pointer-events-none fixed inset-0 z-60 opacity-[0.045] mix-blend-multiply" />
        {children}
      </body>
    </html>
  );
}
