import { Target, Flag, Wrench, Github, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { ProjectData } from "../data/projects";

function ModalSection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size: number; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[#e8e8e0] font-medium mb-3 flex items-center gap-2">
        <Icon size={18} strokeWidth={1.5} />
        {title}
      </h4>
      {children}
    </div>
  );
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-xl
                    p-4 overflow-hidden cursor-pointer"
          onClick={onClose}
          onWheel={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl border border-white/8 flex flex-col 
                      overflow-hidden cursor-default mx-2 sm:mx-4 bg-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 sm:p-7 border-b border-white/6">
              <div className="flex-1 min-w-0 pr-4">
                <span className="inline-block text-sm tracking-[0.06em] text-[#e8e8e0]/50 mb-2">
                  {project.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  {project.title}
                </h2>
                <p className="text-sm text-[#e8e8e0]/55">{project.date}</p>
              </div>
              <button
                type="button"
                data-haptic="impact-light"
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/18 cursor-pointer"
                aria-label="Fermer la fiche projet"
           
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            <div
              className="overflow-y-auto flex-1 p-5 sm:p-7"
              onWheel={(e) => e.stopPropagation()}
            >
              <p className="leading-relaxed opacity-80 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium opacity-70 px-2.5 py-1 rounded-md border border-white/10 bg-white/3"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ModalSection icon={Target} title="Compétences">
                  <ul className="space-y-2">
                    {project.competences.map((comp, index) => (
                      <li
                        key={index}
                        className="opacity-80 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#e8e8e0]/50 mt-3 shrink-0" />
                        {comp}
                      </li>
                    ))}
                  </ul>
                </ModalSection>

                <ModalSection icon={Flag} title="Objectifs">
                  <ul className="space-y-2">
                    {project.objectifs.map((obj, index) => (
                      <li
                        key={index}
                        className="opacity-80 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#e8e8e0]/50 mt-3 shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </ModalSection>

                <ModalSection icon={Wrench} title="Techniques acquises">
                  <ul className="space-y-2">
                    {project.techniques.map((tech, index) => (
                      <li
                        key={index}
                        className="opacity-80 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#e8e8e0]/50 mt-3 shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              </div>

              {project.github && (
                <div className="mt-8 pt-6 border-t border-white/6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e8e8e0]/40"
                  >
                    <Github size={18} strokeWidth={1.5} />
                    Voir sur GitHub
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
