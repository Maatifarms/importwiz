const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    desc: "Share your product requirements, quantity, quality specs, and destination. Takes under 2 minutes.",
    icon: "📋",
  },
  {
    number: "02",
    title: "We Find Verified Suppliers",
    desc: "Our network scans 500+ vetted suppliers across 25 countries to match you with the best fit.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Compare & Confirm",
    desc: "Get quotes from multiple suppliers. We handle negotiations and quality checks for you.",
    icon: "✅",
  },
  {
    number: "04",
    title: "Delivered to Your Door",
    desc: "We manage logistics, customs clearance, and last-mile delivery. You just receive your goods.",
    icon: "🚢",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#1FA971] text-sm font-semibold uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            How ImportWiz Works
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From inquiry to delivery — we manage the entire sourcing chain so you don&apos;t have to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 text-gray-300 text-2xl z-10">
                  →
                </div>
              )}
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-[#1FA971] font-black text-sm mb-2">{step.number}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0b1f3a] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Ready to start sourcing?</p>
            <p className="text-gray-400 text-sm">Get your first quote in under 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="bg-[#1FA971] hover:bg-[#17a063] text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Start Now — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
