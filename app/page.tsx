import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection"; // Import the new section

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <ContactSection /> 
    </div>
  );
}