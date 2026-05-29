import { useState, useRef } from "react";
import {
  Send,
  User,
  MessageSquare,
  Sparkles,
  Github,
  ArrowUp,
} from "lucide-react";
import { motion } from "motion/react";
import FadeIn from "./ReactBits/FadeIn";
import BlurText from "./ReactBits/BlurText";
import VariableProximity from "./ReactBits/VariableProximity";

const navFromSettings = "'wght' 520, 'wdth' 100";
const navToSettings = "'wght' 900, 'wdth' 118";

const navLinks = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    subject?: string;
    message?: string;
  }>({});
  const contactSectionRef = useRef<HTMLElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = () => {
    const next: typeof errors = {};
    const name = formData.name.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();
    if (!name) next.name = "Indiquez au moins un nom ou un pseudo.";
    if (!subject) next.subject = "L’objet aide à classer le message.";
    if (!message) next.message = "Écrivez quelques lignes, même courtes.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const mailtoLink = `mailto:paaul.rbn@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n\n${name}`)}`;
    window.location.href = mailtoLink;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const inputClasses =
    "w-full pl-10 pr-3 py-3 rounded-xl border bg-white/3 text-[#F3F3EC] " +
    "placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e8e8e0]/25 " +
    "focus:border-white/22 focus:bg-white/5 transition-[background-color,border-color,box-shadow,color] duration-200";
  const inputBorder = (field: keyof typeof errors) =>
    errors[field] ? "border-red-300/35" : "border-white/8";

  const formBlock = (
    <div className="flex flex-col gap-4">
      <div className="relative group">
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${inputClasses} ${inputBorder("name")}`}
          />
        </div>
        {errors.name && (
          <p
            id="contact-name-error"
            className="mt-1.5 text-sm text-red-200/80"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="relative">
          <Sparkles
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet du message"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject ? "contact-subject-error" : undefined
            }
            className={`${inputClasses} ${inputBorder("subject")}`}
          />
        </div>
        {errors.subject && (
          <p
            id="contact-subject-error"
            className="mt-1.5 text-sm text-red-200/80"
            role="alert"
          >
            {errors.subject}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="relative">
          <MessageSquare
            className="absolute left-3 top-4 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputClasses} min-h-32 resize-y ${inputBorder("message")}`}
          />
        </div>
        {errors.message && (
          <p
            id="contact-message-error"
            className="mt-1.5 text-sm text-red-200/80"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <motion.button
        type="button"
        data-haptic="impact-medium"
        onClick={handleSubmit}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full py-3 px-6 rounded-xl font-medium text-[#0a0a0c] bg-[#F3F3EC] hover:bg-[#fafaf6] 
        transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden cursor-pointer 
        hover:shadow-[0_20px_48px_-12px_rgba(232,232,224,0.18)] hover:-translate-y-0.5 active:translate-y-0 
        focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e8e8e0]/55"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Send
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
          Envoyer
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </motion.button>
    </div>
  );

  return (
    <section
      ref={contactSectionRef}
      id="contact"
      className="mx-4 sm:mx-6 md:mx-8 mt-28 sm:mt-36 pb-16 sm:pb-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 lg:items-end">
          {/* Colonne navigation */}
          <aside className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-8 sm:gap-10 lg:justify-end">
            <FadeIn direction="up" distance={28}>
              <nav
                className="flex flex-col gap-2 sm:gap-3"
                aria-label="Navigation du site"
              >
                {navLinks.map(({ label, href }) => (
                  <button
                    key={label}
                    type="button"
                    data-haptic="impact-light"
                    onClick={() => scrollToSection(href)}
                    className="block w-fit py-0.5 text-[#e8e8e0]/88 hover:text-[#e8e8e0] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e8e0]/40 rounded-sm bg-transparent border-0 cursor-pointer text-left"
                  >
                    <VariableProximity
                      label={label}
                      containerRef={contactSectionRef}
                      fromFontVariationSettings={navFromSettings}
                      toFontVariationSettings={navToSettings}
                      radius={72}
                      falloff="gaussian"
                      className="text-2xl sm:text-3xl md:text-4xl leading-none"
                      style={{
                        color: "inherit",
                        fontFamily: '"Inter", sans-serif',
                      }}
                    />
                  </button>
                ))}
              </nav>
            </FadeIn>
            <FadeIn delay={0.06} distance={24}>
              <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="min-w-0">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#e8e8e0]/95 normal-case">
                    Paul Roubinet
                  </p>
                  <p className="mt-1.5 text opacity-50 tracking-wide">
                    Développeur full-stack
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <motion.button
                    type="button"
                    data-haptic="impact-light"
                    onClick={() => {
                      window.open(
                        "https://github.com/paaulrbn",
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                    whileTap={{ scale: 0.92 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/4 hover:bg-white/10 hover:border-white/18 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e8e8e0]/40"
                    aria-label="Profil GitHub"
                  >
                    <Github size={16} strokeWidth={1.5} />
                  </motion.button>
                  <motion.button
                    type="button"
                    data-haptic="impact-light"
                    whileTap={{ scale: 0.92 }}
                    onClick={scrollToTop}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/4 hover:bg-white/10 hover:border-white/18 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e8e8e0]/40"
                    aria-label="Revenir en haut de la page"
                  >
                    <ArrowUp size={16} strokeWidth={1.5} />
                  </motion.button>
                </div>
              </div>
            </FadeIn>
          </aside>

          {/* Colonne contact */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8 sm:gap-10 lg:justify-end">
            <FadeIn direction="up" distance={36}>
              <p
                id="contact-heading"
                className="text-[0.7rem] font-medium tracking-[0.2em] text-[#e8e8e0]/45 uppercase sr-only"
              >
                Contact
              </p>
              <div className="font-sf-section-title">
                <BlurText
                  text="Contact"
                  delay={80}
                  animateBy="letters"
                  direction="bottom"
                  stepDuration={0.3}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
                  animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                  animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
                />
              </div>
              <p className="mt-4 opacity-70 prose-readable text-pretty max-w-lg">
                Un projet, une question ou une idée : écrivez-moi, je réponds
                dès que possible.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} distance={28}>
              <div className="rounded-4xl border border-white/8 bg-white/4 backdrop-blur-md p-4 sm:p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
                {formBlock}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
