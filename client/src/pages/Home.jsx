import { useEffect, useRef } from "react";
import "tailwindcss";
import Lenis from 'lenis';
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Home = () => {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const lenis = lenisRef.current;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section>
        {/* Header */}
        <Navbar />
        <Title />
        {/* Content */}
        <Info />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default Home