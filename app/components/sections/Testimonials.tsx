const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Director, Mehta Textiles Pvt. Ltd.",
    country: "India → Germany",
    text: "ImportWiz helped us find a certified organic cotton supplier in just 3 days. The quality checks and on-time delivery saved us weeks of back-and-forth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sunita Agarwal",
    role: "Founder, SpiceRoute Exports",
    country: "India → UAE",
    text: "We scaled from 2 to 12 countries with ImportWiz handling our logistics. Their supplier network for spices is unmatched. Zero delays in 18 months.",
    rating: 5,
  },
  {
    name: "Arjun Krishnan",
    role: "Procurement Head, IndustrialPro",
    country: "India → USA",
    text: "The private labelling support is excellent. They sourced, branded, and shipped our entire product range. Saved us 30% vs. our previous sourcing setup.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0b1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#1FA971] text-sm font-semibold uppercase tracking-wider">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Trusted by Exporters & Importers
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real businesses. Real results. See what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
                <p className="text-[#1FA971] text-xs mt-1">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
