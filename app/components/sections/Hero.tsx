"use client";
import { useState } from "react";

const stats = [
  { value: "25+", label: "Countries Served" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "500+", label: "Verified Suppliers" },
  { value: "10K+", label: "Orders Fulfilled" },
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", product: "", quantity: "", country: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-[#0b1f3a] flex items-center pt-16">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#1FA971]/20 text-[#1FA971] text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Trusted Global Sourcing Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Simplifying{" "}
              <span className="text-[#1FA971]">Global Imports</span>{" "}
              &amp; Product Sourcing
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              We connect businesses with verified suppliers across 25+ countries. From sourcing to
              doorstep delivery — we handle it all so you can focus on growing.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-black text-[#1FA971]">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-[#1FA971] hover:bg-[#17a063] text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="#how-it-works"
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-colors"
              >
                How it Works
              </a>
            </div>
          </div>

          {/* Right - Quote Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Get a Free Sourcing Quote</h2>
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
                  <input
                    required
                    type="text"
                    placeholder="Product You Want to Source"
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Quantity / MOQ"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971]"
                    />
                    <input
                      type="text"
                      placeholder="Destination Country"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your requirement..."
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FA971] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1FA971] hover:bg-[#17a063] text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Or{" "}
                  <a href="https://wa.me/19176954772" className="text-[#1FA971] font-medium">
                    chat on WhatsApp
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
