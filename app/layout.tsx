import type { Metadata } from "next";
import { Poppins, Ubuntu, Satisfy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlowClient from "@/components/CursorGlowClient";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  weight: ["400"],
  variable: "--font-satisfy",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Al-Qaysi — Software Engineer",
  description:
    "AI-augmented software engineer with 5+ years of real-world development experience — full-stack web, Android, UX, and game systems.",
  keywords: ["Mohamed Al-Qaysi", "Software Engineer", "AI Developer", "Full Stack", "Next.js", "Portfolio"],
  authors: [{ name: "Mohamed Al-Qaysi" }],
  openGraph: {
    title: "Mohamed Al-Qaysi — Software Engineer",
    description: "AI-augmented full-stack developer, co-founder, and final-semester SE student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ubuntu.variable} ${satisfy.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#07134A] text-white antialiased">
        <CursorGlowClient />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
