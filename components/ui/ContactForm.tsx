"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccess(false);

    try {
      // Send the actual request to the Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Handle Success
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form

      // Optional: Reset success status after 5 seconds to let them send another
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
         className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Success Message (Green) */}
      {isSuccess && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-green-900">Thank you!</h4>
            <p className="text-sm text-green-700 mt-1">
              Your message has been sent. We'll be in touch shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error Message (Red) */}
      {errorMessage && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
          <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-red-900">Error</h4>
            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}