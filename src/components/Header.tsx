import { useState, useEffect } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  onMenuClick: () => void;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Header({ onMenuClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/80 backdrop-blur-xl border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-xs sm:text-sm tracking-wider"
        >
          GRENOBLE, FRANCE
          <span className="ml-4 sm:ml-8 tabular-nums">{time}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="hidden md:block text-xs sm:text-sm tracking-wider"
        >
          Développeur Full-Stack
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          onClick={onMenuClick}
          className="flex items-center gap-2.5 text-xs sm:text-sm tracking-wider hover:opacity-100 transition-opacity cursor-pointer"
        >
          MENU
          <MenuIcon size={20} strokeWidth={1.5} />
        </motion.button>
      </div>
    </header>
  );
}
