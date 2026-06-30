const badges = [
  { icon: "🏆", label: "ISO Certified Partners" },
  { icon: "✅", label: "APEDA Registered" },
  { icon: "🌿", label: "Organic Certified" },
  { icon: "🔒", label: "Secure Payments" },
  { icon: "📦", label: "End-to-End Logistics" },
  { icon: "🌍", label: "25+ Countries" },
];

export default function TrustBar() {
  return (
    <section id="why-us" className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 font-semibold">
          Why businesses trust ImportWiz
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <span className="text-3xl">{b.icon}</span>
              <span className="text-xs text-gray-600 font-medium text-center">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
