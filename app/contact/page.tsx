import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      {/* 1. The Global Header */}
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to start your next project? We are here to help you grow."
      />

      {/* 2. Reusing your existing Contact Section 
          We use -mt-20 (negative margin) or remove the padding in the section 
          if it feels too spaced out. For now, let's render it normally.
      */}
      <div className="bg-slate-50 min-h-screen">
        <ContactSection />
      </div>
    </>
  );
}