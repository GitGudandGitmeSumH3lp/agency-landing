import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's build something <br />
              <span className="text-blue-600">extraordinary.</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Whether you need a complete overhaul or just a push in the right direction, our team is ready to help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Message Us</h3>
                  <p className="text-gray-600">
                    Have a question? Start a conversation using the chat bubble in the right corner.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Innovation Dr.<br />
                    Tech City, TC 90210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}