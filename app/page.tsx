import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import HowItWorks from "./components/sections/HowItWorks";
import ProductCategories from "./components/sections/ProductCategories";
import Testimonials from "./components/sections/Testimonials";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ProductCategories />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
