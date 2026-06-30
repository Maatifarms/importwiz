"use client";
import { useState } from "react";

export default function ContactCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="text-[#1FA971] text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">
              Ready to Simplify Your Sourcing?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Tell us what you need and we&apos;ll find the best supplier match within 24 hours — completely free.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📧", text: "hello@importwiz.shop" },
                { icon: "💬", text: "WhatsApp: +1 917 695 4772" },
                { icon: "🕐", text: "Response within 24 hours" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We&apos;ll reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971]"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your sourcing requirement..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1FA971] hover:bg-[#17a063] text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
