import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that clean, modern look
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tidal Solutions | Digital Marketing Agency",
    template: "%s | Tidal Solutions", // Creates "Services | Tidal Solutions" automatically
  },
  description: "We build data-driven marketing strategies that turn ripples into waves. SEO, Content, and Paid Ads for modern brands.",
  keywords: ["Digital Marketing", "SEO Agency", "Web Design", "Next.js Developers"],
  openGraph: {
    title: "Tidal Solutions | Digital Marketing Agency",
    description: "Scale your business with precision, creativity, and modern technology.",
    url: "https://tidal-agency.vercel.app", // We will update this after deployment
    siteName: "Tidal Solutions",
    images: [
      {
        url: "/og-image.jpg", // You will need to add this image to /public later
        width: 1200,
        height: 630,
        alt: "Tidal Solutions Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tidal Solutions",
    description: "Scale your business with precision.",
    images: ["/og-image.jpg"], // Same image
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        {/* pt-16 accounts for the fixed navbar height */}
        <main className="min-h-screen pt-16 flex flex-col">
          {children}
        </main>
        <Footer />
        <ChatWidget />

      </body>
    </html>
  );
}