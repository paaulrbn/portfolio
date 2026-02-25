import {
  User,
  Target,
  Briefcase,
  GraduationCap,
  Code,
  Wrench,
} from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";
import CardBackground from "./CardBackground";
import SectionTitle from "./SectionTitle";
import Timeline, { type TimelineEntry } from "./Timeline";

const WhoAmI = () => {
  const content = (
    <>
      <SectionTitle icon={User} title="Qui suis-je" />
      <div className="flex flex-col gap-4">
        <p className="opacity-80 leading-relaxed">
          Je m'appelle Paul Roubinet, j'ai 20 ans et je suis étudiant en 3ème
          année de BUT Informatique à l'IUT2 de Grenoble, dans le parcours
          réalisation d'applications.
        </p>
        <p className="opacity-80 leading-relaxed">
          Je suis développeur Fullstack passionné par le développement
          web, le développement d'applications et la cybersécurité.
        </p>
        <p className="opacity-80 leading-relaxed">
          Titulaire du permis B, je suis toujours curieux d'apprendre de
          nouvelles technologies. J'ai développé mes compétences en autodidacte
          en parallèle de ma formation.
        </p>
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const FutureProjects = () => {
  const content = (
    <>
      <SectionTitle icon={Target} title="Projets d'avenir" />
      <div className="flex flex-col gap-4">
        <p className="opacity-80 leading-relaxed">
          Mon objectif est de me spécialiser en développement d'applications et
          cybersécurité tout en restant ouvert aux opportunités qui se
          présentent. Je souhaite apporter des solutions innovantes, efficaces
          et sécurisées.
        </p>
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const experienceEntries: TimelineEntry[] = [
  {
    period: "Avril 2025 - Juillet 2025",
    title: "Stage - Laboratoire G-SCOP, Grenoble",
    description:
      "Développement d'un outil d'aide à la décision multi-critère de type graphe en coordonnées parallèles en C++",
  },
  {
    period: "Décembre 2019",
    title: "Stage de 3ème - AFB, Saint-Égrève",
    description:
      "Diagnostic matériel et logiciel, remplacement de composants défectueux, configuration de systèmes Windows.",
  },
];

const Experience = () => {
  const content = (
    <>
      <SectionTitle icon={Briefcase} title="Expérience" />
      <Timeline entries={experienceEntries} />
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const educationEntries: TimelineEntry[] = [
  {
    period: "2023 - Présent",
    title: "BUT Informatique, parcours réalisation d'applications",
    description: "IUT2 de Grenoble",
  },
  {
    period: "2020 - 2023",
    title: "Baccalauréat général",
    description: (
      <>
        Lycée Les Eaux Claires, mention assez bien
        <br />
        Spécialités : Mathématiques, NSI (Numérique et Sciences Informatiques)
        et Anglais
      </>
    ),
  },
];

const Education = () => {
  const content = (
    <>
      <SectionTitle icon={GraduationCap} title="Parcours" />
      <Timeline entries={educationEntries} />
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const Languages = () => {
  const techs = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JAVA", icon: "/icons/java.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "C++", icon: "/icons/c++.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Symfony", icon: "/icons/symfony.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Android", icon: "/icons/android.svg" },
  ];

  const content = (
    <>
      <SectionTitle icon={Code} title="Langages & Frameworks" />
      <div className="flex flex-wrap gap-2.5 mt-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:drop-shadow-[0_4px_12px_rgba(243,243,236,0.25)] group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 243, 236, 0.05) 0%, rgba(243, 243, 236, 0.02) 100%)",
              borderColor: "rgba(243, 243, 236, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(243, 243, 236, 0.12) 0%, rgba(243, 243, 236, 0.06) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(243, 243, 236, 0.05) 0%, rgba(243, 243, 236, 0.02) 100%)";
            }}
          >
            {tech.icon && (
              <div
                className="w-5 h-5"
                style={{
                  maskImage: `url(${tech.icon})`,
                  WebkitMaskImage: `url(${tech.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  background:
                    "linear-gradient(135deg, #F3F3EC 0%, #999999 100%)",
                }}
              />
            )}
            <span className="text-[0.85rem] font-medium opacity-80 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const Tools = () => {
  const tools = [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "JetBrains", icon: "/icons/jetbrains.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Notion", icon: "/icons/notion.svg" },
    { name: "Bash", icon: "/icons/bash.svg" },
    { name: "Office", icon: "/icons/microsoft-office.svg" },
    { name: "VirtualBox", icon: "/icons/virtualbox.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
  ];

  const content = (
    <>
      <SectionTitle icon={Wrench} title="Outils" />
      <div className="flex flex-wrap gap-2.5 mt-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all hover:-translate-y-0.5 hover:drop-shadow-[0_4px_12px_rgba(243,243,236,0.25)] group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 243, 236, 0.05) 0%, rgba(243, 243, 236, 0.02) 100%)",
              borderColor: "rgba(243, 243, 236, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(243, 243, 236, 0.12) 0%, rgba(243, 243, 236, 0.06) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(243, 243, 236, 0.05) 0%, rgba(243, 243, 236, 0.02) 100%)";
            }}
          >
            {tool.icon && (
              <div
                className="w-5 h-5"
                style={{
                  maskImage: `url(${tool.icon})`,
                  WebkitMaskImage: `url(${tool.icon})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  background:
                    "linear-gradient(135deg, #F3F3EC 0%, #999999 100%)",
                }}
              />
            )}
            <span className="text-[0.85rem] font-medium opacity-70 transition-colors">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-16 sm:mt-24 gap-6 sm:gap-10">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium"
        style={{ fontFamily: "Monument Extended" }}
      >
        À PROPOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <WhoAmI />
        <FutureProjects />
        <Experience />
        <Education />
        <Languages />
        <Tools />
      </div>
    </section>
  );
}
