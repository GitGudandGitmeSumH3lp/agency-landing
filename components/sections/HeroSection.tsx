import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 xl:py-48 bg-slate-950 overflow-hidden">
      {/* Background Gradients for Modern "Glow" Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <span className="text-sm font-medium text-blue-400">
             Elevate your digital presence
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Unleash the Power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Tidal Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          We build data-driven marketing strategies that turn ripples into waves. 
          Scale your business with precision, creativity, and modern technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-200"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center justify-center text-slate-300 hover:text-white px-8 py-3.5 rounded-full text-base font-medium border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}