import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Hu",
  description: "MBA who codes. Enterprise software, data analytics, and 0→1 products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
