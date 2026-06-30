const categories = [
  { name: "Agro & Food Products", icon: "🌾", desc: "Rice, pulses, grains, processed foods" },
  { name: "Spices & Herbs", icon: "🌶️", desc: "Turmeric, cumin, cardamom, pepper" },
  { name: "Chemicals", icon: "⚗️", desc: "Industrial, specialty & agro chemicals" },
  { name: "Industrial Goods", icon: "⚙️", desc: "Machinery parts, tools, hardware" },
  { name: "Consumer Products", icon: "🛍️", desc: "FMCG, homeware, personal care" },
  { name: "Textiles & Garments", icon: "👕", desc: "Fabrics, readymade, home textiles" },
  { name: "Gems & Jewellery", icon: "💎", desc: "Precious stones, gold, silver, crafts" },
  { name: "Handicrafts & Decor", icon: "🏺", desc: "Home décor, gifts, artisan goods" },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#1FA971] text-sm font-semibold uppercase tracking-wider">What We Source</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Product Categories
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We source across 8+ major categories with verified, quality-certified suppliers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#contact"
              className="group bg-gray-50 hover:bg-[#0b1f3a] border border-gray-100 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-sm mb-1 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                {cat.desc}
              </p>
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Don&apos;t see your category?{" "}
          <a href="#contact" className="text-[#1FA971] font-medium hover:underline">
            Talk to us — we source almost anything.
          </a>
        </p>
      </div>
    </section>
  );
}
