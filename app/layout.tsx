import type { Metadata } from "next";
import {
  Geist,
  Fraunces,
  Bricolage_Grotesque,
  JetBrains_Mono,
  Caveat,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PawTrail } from "@/components/fun/paw-trail";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

// Display face. Variable, so no weight list — .display asks for 700,
// .label and .btn for 600.
const bricolage = Bricolage_Grotesque({
  variable: "--font-tech",
  subsets: ["latin"],
});

// Margin notes and annotations only — never body or UI text.
const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "mentorSEAS — UCLA Engineering Mentorship",
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
      className={cn("antialiased", geistSans.variable, bricolage.variable, fraunces.variable, jetbrainsMono.variable, caveat.variable)}
    >
      <body className="bg-surface text-blue-deep min-h-dvh selection:bg-blue/20">
        {/* Sitewide. Self-guards on touch and reduced motion, so it simply
            renders nothing where a cursor trail makes no sense. */}
        <PawTrail />
        {children}
      </body>
    </html>
  );
}
