import React from "react";
import { motion } from "motion/react";
import ExploreIndicator from "./ExploreIndicator";
import BlurText from "./ReactBits/BlurText";

const ease = [0.25, 0.1, 0.25, 1] as const;

function Hero() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: Math.round(e.clientX),
        y: Math.round(e.clientY),
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-start h-svh w-full px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-20 sm:pb-24 relative">
      <div className="flex flex-col gap-5 sm:gap-7 my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight"
          style={{ fontFamily: "Monument Extended" }}
        >
          PAUL
          <br />
          ROUBINET
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="max-w-sm"
        >
          <BlurText
            text="Étudiant en BUT Informatique à l'IUT2 de Grenoble. Passionné par la technologie et la programmation, je développe des solutions créatives et fonctionnelles."
            delay={20}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
            className="text-sm sm:text-base leading-relaxed opacity-80"
          />
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.5, ease }}
        className="hidden sm:flex flex-row gap-0 justify-end text-xs"
        style={{ letterSpacing: "0.1em", fontFamily: "Andale Mono" }}
      >
        <div className="flex flex-col text-white/40">
          <span>[X]</span>
          <span>[Y]</span>
        </div>
        <div className="flex flex-col">
          <span>.{mouse.x}PX</span>
          <span>.{mouse.y}PX</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
      >
        <ExploreIndicator
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease }}
        className="animate-spin-slow w-screen h-100vw md:w-[80vw] md:h-[80vw] bottom-0 sm:bottom-[-5vw] md:bottom-[-15vw] lg:bottom-[-25vw]"
        style={{
          position: "absolute",
          right: "-30vw",
          zIndex: "-1",
        }}
        src="star.png"
        alt="star"
        loading="lazy"
        decoding="async"
      />
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 480s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
