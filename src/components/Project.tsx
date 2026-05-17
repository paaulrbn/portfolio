import { useState } from "react";
import TiltedCard from "./ReactBits/TiltedCard";
import FadeIn from "./ReactBits/FadeIn";
import BlurText from "./ReactBits/BlurText";
import CardBackground from "./CardBackground";
import ProjectModal from "./ProjectModal";
import { projects, projectsData } from "../data/projects";
import { useHaptics } from "../hooks/useHaptics";

function Project() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { hapticRigid, hapticLight } = useHaptics();

  const openModal = (id: number) => {
    hapticRigid();
    setSelectedId(id);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    hapticLight();
    setSelectedId(null);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  return (
    <>
      <section
        id="projects"
        className="relative flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-28 sm:mt-36 gap-10 sm:gap-14 pb-4"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[5%] right-[10%] w-[400px] h-[300px] rounded-full bg-indigo-600/10 blur-[96px]" />
          <div className="absolute top-[45%] left-[5%] w-[360px] h-[280px] rounded-full bg-violet-500/8 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[320px] h-[260px] rounded-full bg-blue-500/8 blur-[80px]" />
        </div>

        <FadeIn direction="up" distance={40}>
          <div className="font-sf-section-title">
            <BlurText
              text="Projets"
              delay={80}
              animateBy="letters"
              direction="bottom"
              stepDuration={0.3}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
              animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
            />
          </div>
          <p className="mt-4 opacity-70 prose-readable text-pretty">
            Une sélection de projets académiques et personnels qui illustrent mon parcours en développement.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full auto-rows-fr">
          {projects.map((proj) => {
            const content = (
              <>
                <div className="font-bold absolute top-2 right-4 text-8xl text-white/10 select-none pointer-events-none">
                  {String(proj.id).padStart(2, "0")}
                </div>
                <h3 className="text-md font-semibold mb-2 leading-snug relative z-10">
                  {proj.title}
                </h3>
                <p className="opacity-70 leading-relaxed mb-2 grow relative z-10">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
                  {proj.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium opacity-70 px-2.5 py-1 rounded-md border border-white/10 bg-white/3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            return (
              <FadeIn key={proj.id} delay={proj.id * 0.06} distance={25}>
                <TiltedCard
                  className="h-full"
                  overlayContent={
                    <div
                      onClick={() => openModal(proj.id)}
                      className="p-5 sm:p-6 flex flex-col h-full cursor-pointer group"
                    >
                      {content}
                    </div>
                  }
                >
                  <CardBackground
                    className="flex flex-col"
                    innerClassName="flex-1 flex flex-col"
                  >
                    {content}
                  </CardBackground>
                </TiltedCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <ProjectModal
        project={selectedId ? projectsData[selectedId] : null}
        onClose={closeModal}
      />
    </>
  );
}

export default Project;
