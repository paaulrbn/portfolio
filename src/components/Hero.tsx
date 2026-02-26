import React from "react";
import { Menu as MenuIcon } from "lucide-react";
import ExploreIndicator from "./ExploreIndicator";

interface HeroProps {
  onMenuClick: () => void;
}

function Hero({ onMenuClick }: HeroProps) {
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
    <div className="flex flex-col items-start h-svh w-full p-4 sm:p-6 md:p-8 pb-20 sm:pb-24 relative">
      <div className="flex justify-between w-full items-center">
        <p className="text-base sm:min-w-64 text-left">
          GRENOBLE, FRANCE
          <span className="ml-6 sm:ml-12">
            {(() => {
              const [time, setTime] = React.useState(
                new Date().toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                }),
              );
              React.useEffect(() => {
                const interval = setInterval(() => {
                  setTime(
                    new Date().toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }),
                  );
                }, 1000);
                return () => clearInterval(interval);
              }, []);
              return time;
            })()}
          </span>
        </p>

        <p className="hidden md:block text-sm md:text-base">Web Developer</p>

        <button
          onClick={onMenuClick}
          className="flex items-center justify-end gap-3 hover:opacity-70 transition-opacity cursor-pointer"
        >
          MENU
          <MenuIcon size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 my-auto">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          style={{ fontFamily: "Monument Extended" }}
        >
          PAUL ROUBINET
        </h1>

        <div className="max-w-80 text-left">
          <p className="text-sm sm:text-base">
            Étudiant en BUT Informatique à l'IUT2 de Grenoble. Passionné par la
            technologie et la programmation, je développe des solutions créatives
            et fonctionnelles.
          </p>
        </div>
      </div>

      <div
        className="hidden sm:flex flex-row gap-0 justify-end"
        style={{ letterSpacing: "0.08em", fontFamily: "Andale Mono" }}
      >
        <div className="flex flex-col text-[#515151]">
          <span>[X]</span>
          <span>[Y]</span>
        </div>
        <div className="flex flex-col">
          <span>.{mouse.x}PX</span>
          <span>.{mouse.y}PX</span>
        </div>
      </div>

      <ExploreIndicator
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <img
        className="animate-spin-slow w-screen h-[100vw] md:w-[80vw] md:h-[80vw] bottom-[10vw] sm:bottom-[-5vw] md:bottom-[-15vw] lg:bottom-[-25vw]"
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
