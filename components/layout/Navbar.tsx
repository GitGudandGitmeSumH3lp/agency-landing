"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 
import { Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Hooks for navigation logic
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  // Logic: If on home, scroll. If elsewhere, go home then scroll.
  const handleStartProject = () => {
    setIsOpen(false); // Close mobile menu if open
    
    if (pathname === "/") {
      // We are already on home, just find the section and scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // We are on another page, navigate to home with the hash
      router.push("/#contact");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Agency<span className="text-blue-600">.io</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href 
                    ? "text-blue-600" 
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Updated Button */}
            <button 
              onClick={handleStartProject}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              {/* Updated Mobile Button */}
              <button 
                onClick={handleStartProject}
                className="w-full bg-black text-white px-5 py-3 rounded-lg font-medium"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}