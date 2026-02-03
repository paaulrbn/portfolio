import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Menu from "./components/Menu";
import LightRays from "./components/ReactBits/LightRays";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-visible">
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-visible">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f3f3ec"
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

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Hero onMenuClick={() => setIsMenuOpen(true)} />
      <About />
      <Project />
    </div>
  );
}

export default App;
