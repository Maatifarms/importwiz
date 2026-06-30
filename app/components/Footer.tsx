export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1FA971] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">IW</span>
              </div>
              <span className="text-xl font-black text-white">
                Import<span className="text-[#1FA971]">Wiz</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Simplifying global imports and product sourcing for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-[#1FA971] transition-colors">Product Sourcing</a></li>
              <li><a href="#how-it-works" className="hover:text-[#1FA971] transition-colors">Import Consulting</a></li>
              <li><a href="#contact" className="hover:text-[#1FA971] transition-colors">Private Labelling</a></li>
              <li><a href="#contact" className="hover:text-[#1FA971] transition-colors">Logistics Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-[#1FA971] transition-colors">Agro &amp; Spices</a></li>
              <li><a href="#products" className="hover:text-[#1FA971] transition-colors">Chemicals</a></li>
              <li><a href="#products" className="hover:text-[#1FA971] transition-colors">Industrial Goods</a></li>
              <li><a href="#products" className="hover:text-[#1FA971] transition-colors">Consumer Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>India (HQ)</li>
              <li>
                <a href="mailto:hello@importwiz.shop" className="hover:text-[#1FA971] transition-colors">
                  hello@importwiz.shop
                </a>
              </li>
              <li>
                <a href="https://wa.me/19176954772" className="hover:text-[#1FA971] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ImportWiz. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1FA971] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1FA971] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
