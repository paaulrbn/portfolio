import { useState } from "react";
import { Target, Flag, Wrench, Github, X, ExternalLink } from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";
import FadeIn from "./ReactBits/FadeIn";
import BlurText from "./ReactBits/BlurText";
import { motion, AnimatePresence } from "motion/react";
import { useHaptics } from "../hooks/useHaptics";

type ProjectData = {
  title: string;
  category: string;
  description: string;
  competences: string[];
  objectifs: string[];
  techniques: string[];
  technologies: string[];
  github: string | null;
};

const projectsData: Record<number, ProjectData> = {
  1: {
    title: "Classificateur de Dépêches Journalistiques",
    category: "Algorithmique",
    description:
      "Le projet consiste à développer un programme capable de classifier automatiquement des dépêches journalistiques en les attribuant à l'une des cinq catégories prédéfinies : Environnement-Sciences, Culture, Économie, Politique, et Sports. Le processus repose sur l'utilisation de lexiques spécifiques à chaque catégorie, avec des mots-clés marqués par des poids représentant leur pertinence.",
    competences: [
      "Programmation JAVA",
      "Algorithmique",
      "Analyse de données",
      "Implémentation d'un besoin client",
      "Comparaison d'approches algorithmiques",
    ],
    objectifs: [
      "Créer un programme de classification fiable et rapide",
      "Générer des lexiques spécifiques à chaque catégorie",
      "Attribuer correctement les dépêches à leurs catégories",
      "Obtenir un taux de précision élevé dans la classification",
    ],
    techniques: [
      "Lecture et traitement de fichiers texte en Java",
      "Implémentation de méthodes de calcul de scores",
      "Collaboration efficace en équipe",
      "Implémentation d'un besoin client",
    ],
    technologies: ["Java", "Algorithmique", "Analyse de données"],
    github:
      "https://github.com/paaulrbn/S1.01-Programme-de-classification-automatique",
  },
  2: {
    title: "Site Web Institutionnel Capgemini",
    category: "Développement Web",
    description:
      "Dans le cadre d'un projet académique, j'ai travaillé sur la conception et la réalisation du site web institutionnel de Capgemini, une entreprise leader dans le secteur du numérique. L'objectif principal était de créer un site pratique et accessible, destiné aux élèves de 3ème en recherche de stage, en leur fournissant des informations compréhensibles sur l'entreprise.",
    competences: [
      "Gestion de projet",
      "Recherche d'information",
      "Conception web",
      "Développement web",
      "Communication",
      "Collaboration en équipe",
    ],
    objectifs: [
      "Créer un site web sobre et écologiquement responsable",
      "Présenter Capgemini de manière claire et accessible",
      "Mettre en valeur la transition numérique et écologique",
      "Vulgariser les informations techniques",
    ],
    techniques: [
      "Outils de conception: whimsical",
      "Gestion de contenu et structuration de l'information",
      "Collaboration en équipe avec répartition des tâches",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Whimsical"],
    github: null,
  },
  3: {
    title: "Thibou - Guide de Musée Intelligent",
    category: "Full-Stack",
    description:
      "Thibou est une application web permettant d'optimiser le parcours des visiteurs dans un musée. Elle aide les utilisateurs à créer des itinéraires personnalisés en fonction de leurs préférences artistiques (mouvements, artistes, types d'œuvres). La plateforme intègre un système de gestion de comptes utilisateurs, un plan interactif du musée et des descriptions détaillées des œuvres exposées.",
    competences: [
      "Développement web full-stack",
      "React & Next.js",
      "TypeScript",
      "Base de données PostgreSQL",
      "Authentification sécurisée",
      "UI/UX avec TailwindCSS",
    ],
    objectifs: [
      "Développer une interface utilisateur intuitive et responsive",
      "Gérer l'authentification et les profils utilisateurs",
      "Visualiser les parcours et les œuvres sur un plan interactif",
      "Assurer la sécurité des données utilisateurs",
    ],
    techniques: [
      "Développement d'API REST avec Next.js",
      "Modélisation de données avec Drizzle ORM",
      "Création de composants React réutilisables",
      "Gestion de la sécurité",
      "Intégration de visualisations interactives",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/balded1ams/Thibou",
  },
  4: {
    title: "Plateforme de Gestion de Stages",
    category: "Mobile & Web",
    description:
      "Carnet de Stage est une solution complète pour la gestion des stages étudiants, comprenant un back-office administratif et une application mobile. Cette plateforme permet aux étudiants de consulter les offres de stage, de soumettre des candidatures, et de suivre leur progression. Les administrateurs peuvent gérer les offres, suivre les candidatures et communiquer avec les étudiants via une interface web sécurisée.",
    competences: [
      "Développement back-end avec Symfony 5.4",
      "Développement mobile Android (Java)",
      "API REST avec API Platform",
      "Base de données PostgreSQL",
      "Architecture client-serveur",
    ],
    objectifs: [
      "Concevoir une plateforme de gestion complète des stages",
      "Développer une API REST sécurisée pour la communication client-serveur",
      "Créer une application mobile intuitive pour les étudiants",
      "Implémenter une gestion des candidatures et offres de stage",
      "Assurer la sécurité des données utilisateurs",
    ],
    techniques: [
      "Développement d'API REST avec Symfony",
      "Modélisation de données avec Doctrine ORM",
      "Gestion d'authentification",
      "Développement Android avec Java",
      "Communication HTTP client-serveur",
      "Conception d'interfaces utilisateur mobiles",
      "Tests d'API avec Postman",
    ],
    technologies: ["Symfony", "Android Java", "API REST", "PostgreSQL"],
    github: null,
  },
  5: {
    title: "École des Loustics - Jeux Éducatifs",
    category: "Mobile",
    description:
      "École des Loustics est une application éducative Android conçue pour aider les enfants à développer leurs compétences en mathématiques et en culture générale de manière ludique. L'application propose différents mini-jeux incluant des exercices d'additions, des tables de multiplication, des questions de culture générale, ainsi qu'un jeu de Chifoumi. Elle permet de créer des profils d'utilisateurs pour suivre les progrès et scores de chaque enfant.",
    competences: [
      "Développement Android natif (Java)",
      "Architecture MVC",
      "Gestion de base de données avec Room",
      "Interface utilisateur adaptée aux enfants",
      "Gestion de données utilisateur",
      "Animation et interaction tactile",
    ],
    objectifs: [
      "Créer une application éducative engageante pour les enfants",
      "Développer plusieurs mini-jeux pédagogiques",
      "Implémenter un système de profils utilisateurs",
      "Intégrer un système de score et de progression",
      "Concevoir une interface simple et intuitive",
      "Offrir une expérience d'apprentissage ludique",
    ],
    techniques: [
      "Développement d'applications Android avec Java",
      "Conception d'interfaces utilisateur avec XML",
      "Gestion de persistance de données avec Room Database",
      "Utilisation des SharedPreferences pour stocker des données utilisateur",
      "Implémentation d'algorithmes de jeux",
      "Navigation entre activités avec Intent",
      "Gestion des résultats d'activité avec ActivityResultLauncher",
    ],
    technologies: ["Android Java", "Room Database", "Architecture MVC"],
    github: "https://github.com/paaulrbn/Ecole-des-Loustics",
  },
  6: {
    title: "ACDeces - Logiciel de Pompes Funèbres",
    category: "Desktop",
    description:
      "ACDeces est une application de gestion d'événements spécialisée dans le domaine des pompes funèbres. Elle permet de gérer les différents aspects logistiques liés aux obsèques : contrats, employés, véhicules, prestations et rendez-vous clients. L'application dispose d'un calendrier intégré pour planifier les événements et visualiser les disponibilités. Elle implémente un système complet de persistence des données permettant de sauvegarder et restaurer l'état de l'application entre les sessions.",
    competences: [
      "Développement Java avec JavaFX",
      "Architecture MVC",
      "Interfaces graphiques FXML",
      "Gestion de données avec sérialisation",
      "Implémentation de systèmes de formulaires complexes",
      "Organisation et structure d'un projet professionnel",
    ],
    objectifs: [
      "Développer une application de gestion complète pour pompes funèbres",
      "Implémenter un système de planification d'événements",
      "Créer une interface utilisateur intuitive avec JavaFX",
      "Concevoir un système de persistance des données",
      "Gérer les contraintes métier spécifiques au domaine funéraire",
      "Permettre la gestion des ressources humaines et matérielles",
    ],
    techniques: [
      "Conception d'applications Java avec architecture MVC",
      "Création d'interfaces utilisateur avec JavaFX et FXML",
      "Implémentation de mécanismes de persistance de données",
      "Gestion des événements JavaFX et création de contrôleurs",
      "Organisation de code selon les principes de l'orienté objet",
      "Utilisation des collections Java pour la gestion des données",
    ],
    technologies: ["Java", "JavaFX", "FXML", "Architecture MVC"],
    github: null,
  },
  7: {
    title: "PCPWidget - Visualisation Interactive",
    category: "Visualisation & Recherche",
    description:
      "PCPWidget est un outil de visualisation interactif développé en C++ avec Qt6 pour analyser des données multidimensionnelles via la technique des coordonnées parallèles (PCP). Ce widget haute performance permet de charger des données Excel/CSV, d'appliquer des filtres interactifs, de réorganiser les axes par glisser-déposer, et offre une personnalisation avancée de l'affichage. Optimisé pour fonctionner sur un mur de 12 écrans 4K, il inclut des bindings Python et une intégration avec Rhino/Grasshopper pour la modélisation 3D.",
    competences: [
      "Développement C++ avancé avec Qt6",
      "Architecture logicielle modulaire",
      "Optimisation graphique haute performance",
      "Création de bindings Python-C++",
      "Interface utilisateur interactive avancée",
      "Gestion de fichiers Excel/CSV",
      "Documentation technique avec Doxygen",
      "Intégration avec outils de modélisation 3D",
    ],
    objectifs: [
      "Développer un widget C++/Qt performant pour la visualisation PCP",
      "Optimiser le rendu pour affichage multi-écrans 4K",
      "Implémenter des interactions avancées (filtres, glisser-déposer)",
      "Créer une architecture modulaire et extensible",
      "Fournir une personnalisation complète de l'affichage",
      "Développer des bindings Python pour l'interopérabilité",
      "Assurer l'intégration avec Rhino/Grasshopper",
    ],
    techniques: [
      "Programmation C++ moderne avec Qt6 et CMake",
      "Optimisation du rendu graphique pour haute résolution",
      "Architecture MVC et séparation des responsabilités",
      "Sérialisation/désérialisation JSON pour la persistence",
      "Développement de bindings ctypes Python-C++",
      "Documentation automatique avec Doxygen",
      "Gestion de projet avec versioning GitLab",
      "Tests et optimisation pour environnements multi-écrans",
    ],
    technologies: ["C++17", "Qt6", "CMake", "Python"],
    github: null,
  },
  8: {
    title: "MANGO - Gestion musicale",
    category: "Full-Stack",
    description:
      "MANGO est une application web complète pour gérer et consulter des données musicales : albums, artistes, pistes, studios d'enregistrement et beatmakers. Un backend Node.js/Express expose une API REST documentée (OpenAPI), avec persistance MongoDB via Mongoose, pagination, liens HATEOAS et authentification JWT pour les opérations d'écriture. Le frontend Angular propose la consultation publique, une zone d'administration protégée par guard et intercepteur HTTP, et une interface avec Tailwind CSS.",
    competences: [
      "Développement d'API REST avec Express",
      "Modélisation et persistance NoSQL (MongoDB, Mongoose)",
      "Authentification et autorisation JWT",
      "Développement frontend avec Angular et TypeScript",
      "Routage, guards et intercepteurs HTTP",
      "Conteneurisation avec Docker et Docker Compose",
    ],
    objectifs: [
      "Centraliser la gestion des entités musicales et leurs relations",
      "Exposer une API cohérente, paginée et sécurisée pour le CRUD",
      "Offrir une interface web de consultation et d'administration",
      "Assurer le déploiement reproductible des services (base, API, UI)",
    ],
    techniques: [
      "Conception de schémas Mongoose et routes REST",
      "Middleware d'authentification et protection des verbes HTTP sensibles",
      "Services Angular et programmation réactive (RxJS)",
      "Documentation API (OpenAPI) et client REST de test côté backend",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/paaulrbn/MANGO",
  },
  9: {
    title: "SILOSE - Suivi des effectifs",
    category: "Alternance · Backend API",
    description:
      "SILOSE est un système d'information pour le suivi des effectifs des laboratoires de recherche. Il est développé de façon collaborative par plusieurs laboratoires du site grenoblois, avec un backend PHP CodeIgniter 3, PostgreSQL et un frontend Angular. En alternance, je contribue sur la modernisation du backend : passage de CodeIgniter 3 à CodeIgniter 4 et mise en place de tests automatisés avec PHPUnit.",
    competences: [
      "Migration d'une base de code CodeIgniter 3 vers CodeIgniter 4",
      "Tests unitaires et d'intégration API avec PHPUnit",
      "Travail en équipe sur un dépôt partagé",
      "Lecture et adaptation de contrôleurs REST existants",
    ],
    objectifs: [
      "Réduire l'écart fonctionnel entre l'API CI3 et la cible CI4",
      "Sécuriser les régressions via une suite de tests sur les contrôleurs",
      "Documenter et reproduire les usages de référence",
    ],
    techniques: [
      "Portage d'API REST de CodeIgniter 3 vers CodeIgniter 4",
      "Intégration de tests PHPUnit au projet",
      "Modèles CodeIgniter 4 : règles de validation, règles personnalisées et accès données",
    ],
    technologies: [
      "PHP",
      "CodeIgniter 4",
      "PHPUnit",
      "PostgreSQL",
      "Composer",
    ],
    github: null,
  },
};

const projects = [
  {
    id: 1,
    title: "Classificateur de Dépêches",
    description:
      "Programme Java de classification automatique de dépêches journalistiques en 5 catégories prédéfinies",
    tags: ["Java", "Algorithmique"],
  },
  {
    id: 2,
    title: "Site Institutionnel Capgemini",
    description:
      "Conception et réalisation du site web institutionnel de Capgemini pour les élèves de 3ème",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Thibou - Guide de Musée",
    description:
      "Application web d'optimisation de parcours dans un musée avec itinéraires personnalisés",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 4,
    title: "Gestion de Stages",
    description:
      "Solution complète de gestion des stages avec back-office web et application mobile Android",
    tags: ["Symfony", "Android", "API REST"],
  },
  {
    id: 5,
    title: "École des Loustics",
    description:
      "Application éducative Android avec mini-jeux pour développer les compétences en mathématiques",
    tags: ["Android Java", "Room DB"],
  },
  {
    id: 6,
    title: "ACDeces - Pompes Funèbres",
    description:
      "Application JavaFX de gestion complète pour pompes funèbres avec calendrier et planning",
    tags: ["Java", "JavaFX"],
  },
  {
    id: 7,
    title: "PCPWidget - Visualisation",
    description:
      "Outil de visualisation C++/Qt6 pour données multidimensionnelles avec coordonnées parallèles",
    tags: ["C++17", "Qt6", "Python"],
  },
  {
    id: 8,
    title: "MANGO - Gestion musicale",
    description:
      "API REST Node.js/MongoDB et application Angular pour gérer albums, artistes, pistes, studios et beatmakers",
    tags: ["Angular", "Node.js", "MongoDB"],
  },
  {
    id: 9,
    title: "SILOSE - Silabo",
    description:
      "Alternance : migration backend CodeIgniter 3 vers 4 et tests PHPUnit",
    tags: ["PHP", "CodeIgniter 4", "PHPUnit"],
  },
];

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
      <h4 className="text-xs font-medium tracking-[0.04em] text-[#e8e8e0]/55 mb-3 flex items-center gap-2">
        <Icon size={14} strokeWidth={1.5} />
        {title}
      </h4>
      {children}
    </div>
  );
}

function Project() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { hapticRigid, hapticLight } = useHaptics();

  const openModal = (projectId: number) => {
    hapticRigid();
    setSelectedProject(projectId);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    hapticLight();
    setSelectedProject(null);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
  const project = selectedProject ? projectsData[selectedProject] : null;

  return (
    <>
      <section
        id="projects"
        className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 mt-28 sm:mt-36 gap-10 sm:gap-14 pb-4"
      >
        <FadeIn direction="up" distance={40}>
          <div className="font-sf-section-title">
            <BlurText
              text="PROJETS"
              delay={80}
              animateBy="letters"
              direction="bottom"
              stepDuration={0.3}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
              animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
            />
          </div>
          <p className="mt-4 text-sm opacity-70 prose-readable text-pretty">
            Une sélection de projets académiques et personnels qui illustrent mon parcours en développement.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full auto-rows-fr">
          {projects.map((proj) => {
            const content = (
              <>
                <div
                  className="font-sf-section-title absolute top-2 right-4 text-8xl text-white/10 select-none pointer-events-none"
                >
                  {String(proj.id).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold mb-2 leading-snug relative z-10">
                  {proj.title}
                </h3>

                <p className="text-sm opacity-70 leading-relaxed mb-5 grow relative z-10">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
                  {proj.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[0.7rem] font-medium opacity-70 px-2.5 py-1 rounded-md border border-white/10 bg-white/5"
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
                  <div
                    className="rounded-2xl border border-white/8 backdrop-blur-xl relative overflow-hidden w-full h-full flex flex-col"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(16,15,18,0.96) 0%, rgba(22,21,26,0.72) 100%)",
                      boxShadow:
                        "0 20px 40px -12px rgba(18, 16, 12, 0.45), 0 1px 0 0 rgba(255,255,255,0.05) inset",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      }}
                    />
                    <div className="opacity-0 pointer-events-none p-5 sm:p-6 flex-1 flex flex-col">
                      {content}
                    </div>
                  </div>
                </TiltedCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#060608]/20 backdrop-blur-md p-4 overflow-hidden cursor-pointer"
            onClick={closeModal}
            onWheel={(e) => e.preventDefault()}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl border border-white/8 flex flex-col overflow-hidden cursor-default mx-2 sm:mx-4"
              style={{
                background:
                  "linear-gradient(180deg, #0e0e12 0%, #08080c 100%)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 sm:p-7 border-b border-white/6">
                <div className="flex-1 min-w-0 pr-4">
                  <span className="inline-block text-[0.65rem] font-medium tracking-[0.06em] text-[#e8e8e0]/50 mb-2">
                    {project.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                    {project.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-[0.97] cursor-pointer shrink-0 mt-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8e8e0]/40"
                  aria-label="Fermer la fiche projet"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Body */}
              <div
                className="overflow-y-auto flex-1 p-5 sm:p-7"
                onWheel={(e) => e.stopPropagation()}
              >
                <p className="leading-relaxed opacity-80 text-[0.95rem] mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs font-medium opacity-75 px-3 py-1.5 rounded-md border border-white/10 bg-white/4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <ModalSection icon={Target} title="Compétences">
                    <ul className="space-y-2">
                      {project.competences.map(
                        (comp: string, index: number) => (
                          <li
                            key={index}
                            className="text-sm opacity-75 leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                            {comp}
                          </li>
                        ),
                      )}
                    </ul>
                  </ModalSection>

                  <ModalSection icon={Flag} title="Objectifs">
                    <ul className="space-y-2">
                      {project.objectifs.map((obj: string, index: number) => (
                        <li
                          key={index}
                          className="text-sm opacity-75 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </ModalSection>

                  <ModalSection icon={Wrench} title="Techniques acquises">
                    <ul className="space-y-2">
                      {project.techniques.map(
                        (tech: string, index: number) => (
                          <li
                            key={index}
                            className="text-sm opacity-75 leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                            {tech}
                          </li>
                        ),
                      )}
                    </ul>
                  </ModalSection>
                </div>

                {project.github && (
                  <div className="mt-8 pt-6 border-t border-white/6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e8e8e0]/40"
                    >
                      <Github size={16} strokeWidth={1.5} />
                      Voir sur GitHub
                      <ExternalLink size={12} strokeWidth={1.5} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Project;
