import { Github, ChevronUp, User, FolderOpen, Mail } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#about", icon: User },
  { label: "Projets", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/10">
      <div className="mx-4 sm:mx-6 md:mx-8 py-8 sm:py-10 flex flex-col items-center gap-6 sm:gap-8">
        <div className="text-center">
          <h3
            className="text-xl font-semibold mb-1"
            style={{ fontFamily: "Monument Extended" }}
          >
            PAUL ROUBINET
          </h3>
          <p className="text-sm opacity-60">Développeur Full-Stack</p>
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/paaulrbn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
          >
            <Github size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <ChevronUp size={18} />
          </button>
        </div>

        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Paul Roubinet. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
