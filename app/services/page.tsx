import PageHeader from "@/components/layout/PageHeader";
import { getAllServices } from "@/lib/data";
import Link from "next/link";
import { Search, PenTool, BarChart3, Code, CheckCircle2 } from "lucide-react";

// Helper to map string names to Icon components
const iconMap = {
  Search: Search,
  PenTool: PenTool,
  BarChart3: BarChart3,
  Code: Code,
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHeader
        title="Our Expertise"
        subtitle="Comprehensive digital solutions designed to scale your business from the ground up."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => {
              const Icon = iconMap[service.iconName];

              return (
                <div
                  key={service.id}
                  className="flex flex-col p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Not sure what you need?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule a free consultation with our strategy team. We'll analyze your current setup and recommend the best path forward.
          </p>
        <Link
        href="/contact"
        className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
        Book Free Consultation
        </Link>
        </div>
      </section>
    </>
  );
}