import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "HOME", href: "#", angle: -12.9 },
  { label: "À PROPOS", href: "#about", angle: -5 },
  { label: "PROJETS", href: "#projects", angle: 5 },
  { label: "CONTACT", href: "#contact", angle: 14 },
];

function Menu({ isOpen, onClose }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [starRotation, setStarRotation] = useState(-12.9);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setStarRotation(menuItems[hoveredIndex].angle);
    }
  }, [hoveredIndex]);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-black overflow-hidden"
          onClick={onClose}
        >
          <div
            className="relative w-full h-full flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Étoile à gauche avec cercle */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3/5 w-screen h-[100vw]"
            >
              {/* Grand cercle avec bordure blanche */}
              <div
                className="absolute inset-[1%] rounded-full"
                style={{
                  border: "2px solid rgba(243, 243, 236, 1)",
                }}
              />
              {/* Étoile */}
              <motion.img
                src="/star-no-effect.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                animate={{ rotate: starRotation }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </motion.div>

            {/* Bouton fermer */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center gap-3 sm:gap-4 hover:opacity-70 transition-opacity cursor-pointer z-10"
              aria-label="Fermer le menu"
            >
              <span
                className="text-xl tracking-wider"
                style={{ fontFamily: "Cirka" }}
              >
                FERMER
              </span>
              <img
                src="/star-icon.png"
                alt=""
                className="w-15 h-15 -rotate-45"
              />
            </motion.button>

            {/* Navigation */}
            <nav
              className="absolute left-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredIndex(index)}
                  initial={{ x: 80 }}
                  animate={{ x: 0 }}
                  exit={{ x: 80 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl py-2 sm:py-3 md:py-5 font-medium transition-opacity duration-300"
                  style={{
                    fontFamily: "Cirka",
                    opacity:
                      hoveredIndex === null || hoveredIndex === index ? 1 : 0.3,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
