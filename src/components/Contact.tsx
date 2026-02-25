import { useState } from "react";
import { Send, User, MessageSquare, Sparkles } from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";
import CardBackground from "./CardBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:paaul.rbn@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `${formData.message}\n\n\n${formData.name}`
    )}`;
    window.location.href = mailtoLink;
  };

  const content = (
    <div className="flex flex-col gap-5">
        <div className="relative group">
          <label className="block text-sm font-medium opacity-70 mb-2">
            Votre nom
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
              size={18}
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#F3F3EC] placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium opacity-70 mb-2">
            Objet
          </label>
          <div className="relative">
            <Sparkles
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-70 transition-opacity"
              size={18}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration, question, opportunité..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#F3F3EC] placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium opacity-70 mb-2">
            Votre message
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 opacity-40 group-focus-within:opacity-70 transition-opacity"
              size={18}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet ou votre demande..."
              rows={5}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#F3F3EC] placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="group relative mt-2 w-full py-3.5 px-6 rounded-xl font-semibold text-black bg-[#F3F3EC] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer hover:shadow-[0_8px_30px_rgba(243,243,236,0.25)] hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
            Envoyer le message
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </div>
  );

  return (
    <section id="contact" className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-16 sm:mt-24 gap-6 sm:gap-10">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium"
        style={{ fontFamily: "Monument Extended" }}
      >
        CONTACT
      </h2>

      <div className="max-w-xl mx-auto w-full">
        <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
          <CardBackground>{content}</CardBackground>
        </TiltedCard>
      </div>
    </section>
  );
}
