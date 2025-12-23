import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that clean, modern look
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agency.io | Modern Marketing Solutions",
  description: "Growing brands through digital excellence.",
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