import Link from "next/link";
import { Rocket, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Rocket size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Agency.io
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Helping brands grow through digital innovation, strategic marketing, and modern design.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
              <SocialIcon icon={<Instagram size={20} />} href="#" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#">SEO Optimization</FooterLink>
                <FooterLink href="#">Content Strategy</FooterLink>
                <FooterLink href="#">Web Development</FooterLink>
                <FooterLink href="#">Social Media</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Press</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Agency.io. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for cleaner code
function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="text-slate-400 hover:text-blue-500 transition-colors">
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}