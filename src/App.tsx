import "./App.css";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import LightRays from "./components/ReactBits/LightRays";
import BackgroundLayers from "./components/BackgroundLayers";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-visible">
      <Analytics />
      <BackgroundLayers />
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-visible">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e8e8e0"
          raysSpeed={0.5}
          lightSpread={10}
          rayLength={2}
          fadeDistance={1.5}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.1}
          distortion={0}
          className="custom-rays -z-10"
        />
      </div>

      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
