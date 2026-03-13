import { useState } from "react";
import { Send, User, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import TiltedCard from "./ReactBits/TiltedCard";
import FadeIn from "./ReactBits/FadeIn";
import BlurText from "./ReactBits/BlurText";
import CardBackground from "./CardBackground";
import { useHaptics } from "../hooks/useHaptics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const { hapticSuccess } = useHaptics();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    hapticSuccess();
    const mailtoLink = `mailto:paaul.rbn@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `${formData.message}\n\n\n${formData.name}`,
    )}`;
    window.location.href = mailtoLink;
  };

  const inputClasses =
    "w-full pl-10 pr-4 py-3 rounded-xl border border-white/8 bg-white/3 text-[#F3F3EC] placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all text-sm font-light";

  const content = (
    <div className="flex flex-col gap-5">
      <div className="relative group">
        <label className="block text-xs font-medium opacity-65 mb-2 tracking-wide uppercase">
          Votre nom
        </label>
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="relative group">
        <label className="block text-xs font-medium opacity-65 mb-2 tracking-wide uppercase">
          Objet
        </label>
        <div className="relative">
          <Sparkles
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Objet"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="relative group">
        <label className="block text-xs font-medium opacity-65 mb-2 tracking-wide uppercase">
          Votre message
        </label>
        <div className="relative">
          <MessageSquare
            className="absolute left-3 top-3.5 opacity-40 group-focus-within:opacity-70 transition-opacity"
            size={16}
            strokeWidth={1.5}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={handleSubmit}
        whileTap={{ scale: 0.98 }}
        className="group relative mt-1 w-full py-3 px-6 rounded-xl font-medium text-sm text-black bg-[#F3F3EC] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer hover:shadow-[0_0_40px_rgba(243,243,236,0.15)] hover:-translate-y-0.5"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Send
            size={15}
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
      id="contact"
      className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-24 sm:mt-32 gap-8 sm:gap-12"
    >
      <FadeIn direction="up" distance={40}>
        <div style={{ fontFamily: "Monument Extended" }}>
          <BlurText
            text="CONTACT"
            delay={80}
            animateBy="letters"
            direction="bottom"
            stepDuration={0.3}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
            animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
          />
        </div>
        <p className="mt-3 text-sm opacity-70 max-w-lg">
          Un projet en tête ? N'hésitez pas à me contacter.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} distance={30}>
        <div className="max-w-xl mx-auto w-full">
          <TiltedCard
            overlayContent={<div className="p-5 sm:p-6">{content}</div>}
          >
            <CardBackground>{content}</CardBackground>
          </TiltedCard>
        </div>
      </FadeIn>
    </section>
  );
}
