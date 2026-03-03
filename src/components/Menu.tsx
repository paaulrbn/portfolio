import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

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

const EXIT_DURATION = 0.35;


function Menu({ isOpen, onClose }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [starRotation, setStarRotation] = useState(-12.9);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const restoreScroll = useCallback(() => {
    if (!isOpenRef.current) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";
    }
  }, []);

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
    }
  }, [isOpen]);

  useEffect(() => {
    return () => restoreScroll();
  }, [restoreScroll]);

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
    <AnimatePresence onExitComplete={restoreScroll}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 bg-[#060608] overflow-hidden"
          onClick={onClose}
        >
          <div
            className="relative w-full h-full flex"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: EXIT_DURATION, ease: [0.4, 0, 0.2, 1] }}
              className="block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3/5 w-screen h-[100vw]"
            >
              <div
                className="absolute inset-[1%] rounded-full"
                style={{
                  border: "2px solid rgba(243, 243, 236, 1)",
                }}
              />
              <motion.img
                src="/star-no-effect.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                animate={{ rotate: starRotation }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: EXIT_DURATION, ease: [0.4, 0, 0.2, 1] }}
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center gap-3 hover:opacity-70 transition-opacity cursor-pointer z-10"
              aria-label="Fermer le menu"
            >
              <span className="text-sm tracking-wider font-light opacity-60">
                FERMER
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                <X size={18} strokeWidth={1.5} />
              </div>
            </motion.button>

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
                  initial={{ x: 80, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.25,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    x: {
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl py-2 sm:py-3 md:py-5 font-medium"
                  style={{ fontFamily: "Cirka" }}
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
