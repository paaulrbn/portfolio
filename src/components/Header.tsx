import { useState, useEffect } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onMenuClick: () => void;
  siteReady?: boolean;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Header({ onMenuClick, siteReady = false }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 80, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = scrollProgress > 0.5;

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  );

  useEffect(() => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 overflow-visible">
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "-8px", backdropFilter: `blur(${20 * scrollProgress}px)`, WebkitBackdropFilter: `blur(${20 * scrollProgress}px)`, maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "-16px", backdropFilter: `blur(${12 * scrollProgress}px)`, WebkitBackdropFilter: `blur(${12 * scrollProgress}px)`, maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 100%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "-24px", backdropFilter: `blur(${6 * scrollProgress}px)`, WebkitBackdropFilter: `blur(${6 * scrollProgress}px)`, maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "-32px", backdropFilter: `blur(${2 * scrollProgress}px)`, WebkitBackdropFilter: `blur(${2 * scrollProgress}px)`, maskImage: "linear-gradient(to bottom, black 5%,  transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 5%,  transparent 100%)", pointerEvents: "none" }} />
      <motion.div
        layout
        transition={{ layout: { duration: 0.35, ease } }}
        className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8"
      >
        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-sm sm:text-base tracking-wider flex items-baseline gap-4 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {scrolled ? (
              <motion.span
                key="name"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="whitespace-nowrap"
              >
                Paul Roubinet
              </motion.span>
            ) : (
              <motion.span
                key="location"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="whitespace-nowrap"
              >
                Grenoble, France
              </motion.span>
            )}
          </AnimatePresence>
          <motion.span layout="position" transition={{ duration: 0.35, ease }} className="tabular-nums">{time}</motion.span>
        </motion.p>

        <motion.p
          layout="position"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="hidden md:block text-sm sm:text-base tracking-wider"
        >
          Développeur Full-Stack
        </motion.p>

        <motion.button
          layout="position"
          data-haptic="impact-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={siteReady ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          whileTap={{ scale: 0.94 }}
          onClick={onMenuClick}
          className="flex items-center gap-2.5 text-sm sm:text-base tracking-wider rounded-md px-1 -mx-1 py-1 hover:opacity-100 opacity-90 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e8e0]/45"
        >
          Menu
          <MenuIcon size={22} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </header>
  );
}
