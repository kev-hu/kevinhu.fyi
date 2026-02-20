import { Bricolage_Grotesque, Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kevin Hu",
    template: "%s | Kevin Hu",
  },
  description: "MBA who codes. Enterprise software, data analytics, and 0→1 products. Building AI, advising startups, creating content.",
  keywords: ["Kevin Hu", "MBA", "AI", "enterprise software", "data analytics", "startups"],
  authors: [{ name: "Kevin Hu", url: "https://kevinhu.fyi" }],
  openGraph: {
    type: "website",
    url: "https://kevinhu.fyi",
    title: "Kevin Hu",
    description: "MBA who codes. Building AI, advising startups, creating content to promote AI literacy.",
    siteName: "Kevin Hu",
  },
  twitter: {
    card: "summary",
    title: "Kevin Hu",
    description: "MBA who codes. Building AI, advising startups, creating content.",
  },
  metadataBase: new URL("https://kevinhu.fyi"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
