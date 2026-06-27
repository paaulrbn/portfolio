import {
  User,
  Target,
  Briefcase,
  GraduationCap,
  Code,
  Wrench,
} from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";
import FadeIn from "./ReactBits/FadeIn";
import BlurText from "./ReactBits/BlurText";
import CardBackground from "./CardBackground";
import SectionTitle from "./SectionTitle";
import Timeline, { type TimelineEntry } from "./Timeline";

const WhoAmI = () => {
  const content = (
    <>
      <SectionTitle icon={User} title="Qui suis-je" />
      <div className="flex flex-col gap-3">
        <p className="opacity-80 leading-relaxed">
          Je suis Paul Roubinet, j'ai 20 ans et je suis étudiant en 3ème
          année de BUT Informatique à l'IUT2 de Grenoble, dans le parcours
          réalisation d'applications et futur étudiant en master MIAGE.
        </p>
        <p className="opacity-80 leading-relaxed">
          Je suis développeur Fullstack passionné par le développement web, le
          développement d'applications et la cybersécurité.
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
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const FutureProjects = () => {
  const content = (
    <>
      <SectionTitle icon={Target} title="Projets d'avenir" />
      <div className="flex flex-col gap-3">
        <p className="opacity-80 leading-relaxed">
          Mon objectif est de me spécialiser en développement d'applications et
          cybersécurité tout en restant ouvert aux opportunités qui se
          présentent. Je veux livrer du code clair, des systèmes fiables et des
          interfaces soignées.
        </p>
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const experienceEntries: TimelineEntry[] = [
  {
    period: "Septembre 2025 - Août 2026",
    title: "Alternance - CNRS, Grenoble",
    description:
      "Refonte du backend d'une application de gestion d'effectifs sous CodeIgniter 4 avec tests unitaires PhpUnit.",
  },
  {
    period: "Avril 2025 - Juillet 2025",
    title: "Stage - Laboratoire G-SCOP, Grenoble",
    description:
      "Développement d'un outil d'aide à la décision multi-critère de type graphe en coordonnées parallèles en C++",
  },
];

const Experience = () => {
  const content = (
    <>
      <SectionTitle icon={Briefcase} title="Expériences" />
      <Timeline entries={experienceEntries} />
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
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
        Spécialités : Mathématiques, NSI et Anglais
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
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const TechBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-white/8 bg-white/3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:bg-white/10 hover:border-white/15 hover:shadow-[0_12px_28px_-12px_rgba(12,10,8,0.65)] cursor-default">
    <div
      className="w-4 h-4 opacity-80"
      style={{
        maskImage: `url(${icon})`,
        WebkitMaskImage: `url(${icon})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        backgroundColor: "currentColor",
      }}
    />
    <span className="text-sm font-medium opacity-80">{name}</span>
  </div>
);

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
    { name: "CodeIgniter", icon: "/icons/codeigniter.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Android", icon: "/icons/android.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
  ];

  const content = (
    <>
      <SectionTitle icon={Code} title="Langages & Frameworks" />
      <div className="flex flex-wrap gap-2 mt-1">
        {techs.map((tech) => (
          <TechBadge key={tech.name} {...tech} />
        ))}
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const Tools = () => {
  const tools = [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "Cursor", icon: "/icons/cursor.svg" },
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
    { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
    { name: "Kibana", icon: "/icons/kibana.svg" },
  ];

  const content = (
    <>
      <SectionTitle icon={Wrench} title="Outils" />
      <div className="flex flex-wrap gap-2 mt-1">
        {tools.map((tool) => (
          <TechBadge key={tool.name} {...tool} />
        ))}
      </div>
    </>
  );

  return (
    <TiltedCard overlayContent={<div className="p-5 sm:p-6">{content}</div>}>
      <CardBackground>{content}</CardBackground>
    </TiltedCard>
  );
};

const cards = [WhoAmI, FutureProjects, Experience, Education, Languages, Tools];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-28 sm:mt-36 gap-10 sm:gap-14 pb-4"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-[420px] h-[320px] rounded-full bg-indigo-600/10 blur-[96px]" />
        <div className="absolute top-[40%] right-[10%] w-[360px] h-[280px] rounded-full bg-violet-500/8 blur-[80px]" />
        <div className="absolute bottom-[15%] left-[35%] w-[300px] h-[240px] rounded-full bg-blue-500/8 blur-[80px]" />
      </div>
      <FadeIn direction="up" distance={40}>
        <div className="font-sf-section-title">
          <BlurText
            text="À propos"
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
          Développeur passionné, curieux des stacks web et de la sécurité.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {cards.map((Card, i) => (
          <FadeIn key={i} delay={i * 0.08} distance={30}>
            <Card />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
