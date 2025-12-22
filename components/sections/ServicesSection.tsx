import { Search, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description: "Climb the rankings with our data-first approach to Search Engine Optimization. We ensure your brand is found by the right people.",
    icon: Search,
  },
  {
    title: "Content Marketing",
    description: "Compelling storytelling that engages your audience. We craft blogs, copy, and scripts that convert visitors into loyal customers.",
    icon: PenTool,
  },
  {
    title: "Paid Advertising",
    description: "Maximize your ROI with targeted PPC campaigns. We manage Google Ads and Social Media spend to get you the best results.",
    icon: BarChart3,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your online footprint, delivered by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}