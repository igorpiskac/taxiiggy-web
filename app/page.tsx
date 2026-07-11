import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}