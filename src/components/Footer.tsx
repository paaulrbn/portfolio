import { Github, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useHaptics } from "../hooks/useHaptics";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { hapticLight } = useHaptics();

  const scrollToTop = () => {
    hapticLight();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 sm:mt-32 border-t border-white/6">
      <div className="mx-4 sm:mx-6 md:mx-8 py-10 sm:py-14 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        <div>
          <p
            className="text-sm font-medium tracking-wider"
            style={{ fontFamily: "Monument Extended" }}
          >
            PAUL ROUBINET
          </p>
          <p className="text-xs opacity-50 mt-1.5">
            Développeur Full-Stack
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs opacity-50 hover:opacity-90 transition-opacity tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <motion.a
            href="https://github.com/paaulrbn"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.92 }}
            onClick={() => hapticLight()}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/15 transition-all cursor-pointer"
            aria-label="Ouvrir le profil GitHub de Paul Roubinet dans un nouvel onglet"
          >
            <Github size={15} strokeWidth={1.5} />
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/15 transition-all cursor-pointer"
            aria-label="Revenir en haut de la page"
          >
            <ArrowUp size={15} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>

      <div className="border-t border-white/4 py-5 text-center">
        <p className="text-[0.65rem] opacity-40 tracking-wide">
          © {new Date().getFullYear()} Paul Roubinet
        </p>
      </div>
    </footer>
  );
}
