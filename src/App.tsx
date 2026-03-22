import "./App.css";
import { useState, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

const Silk = lazy(() => import("./components/ReactBits/Silk"));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="top" className="relative min-h-dvh overflow-visible">
      <Analytics />
      <div
        className="fixed inset-0 z-0 h-dvh w-full pointer-events-none"
        aria-hidden
      >
        <Suspense>
          <Silk
            className="min-h-dvh h-full w-full"
            speed={3}
            scale={.8}
            color="#333333"
            noiseIntensity={0.7}
            rotation={0.18}
          />
        </Suspense>
      </div>

      <div className="relative z-10">
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main id="contenu-principal">
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
