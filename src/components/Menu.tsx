import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useHaptics } from "../hooks/useHaptics";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "ACCUEIL", href: "#top", angle: -12.9 },
  { label: "À PROPOS", href: "#about", angle: -5 },
  { label: "PROJETS", href: "#projects", angle: 5 },
  { label: "CONTACT", href: "#contact", angle: 14 },
];

const EXIT_DURATION = 0.3;

function Menu({ isOpen, onClose }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [starRotation, setStarRotation] = useState(-12.9);
  const isOpenRef = useRef(isOpen);
  const { hapticLight, hapticSelection } = useHaptics();

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

  const handleClose = () => {
    hapticLight();
    onClose();
  };

  const handleNavClick = () => {
    hapticSelection();
    onClose();
  };

  return (
    <AnimatePresence onExitComplete={restoreScroll}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            duration: EXIT_DURATION,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-50 overflow-hidden"
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 35,
                opacity: { duration: EXIT_DURATION, ease: [0.4, 0, 0.2, 1] },
              }}
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
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 38,
                opacity: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.93 }}
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center gap-3 hover:opacity-70 transition-opacity cursor-pointer z-10"
              aria-label="Fermer le menu"
            >
              <span className="text-sm tracking-wider font-light opacity-60">
                FERMER
              </span>
              <div className="w-10 h-10 rounded-full border border-white/18 flex items-center justify-center backdrop-blur-sm">
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
                  onClick={handleNavClick}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    hapticSelection();
                  }}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.22,
                  }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 380,
                      damping: 38,
                      delay: index * 0.05,
                    },
                    opacity: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl py-2 sm:py-3 md:py-5 font-medium cursor-pointer"
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
