export type ProjectData = {
  title: string;
  date: string;
  category: string;
  description: string;
  competences: string[];
  objectifs: string[];
  techniques: string[];
  technologies: string[];
  github: string | null;
};

export type ProjectCard = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export const projectsData: Record<number, ProjectData> = {
  1: {
    title: "SILOSE - Suivi des effectifs",
    date: "Septembre 2025 - Août 2026",
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
  2: {
    title: "MANGO - Gestion musicale",
    date: "Janvier 2026",
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
  3: {
    title: "PCPWidget - Visualisation Interactive",
    date: "Avril 2025 - Juillet 2025",
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
  4: {
    title: "ACDeces - Logiciel de Pompes Funèbres",
    date: "Juin 2024",
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
  5: {
    title: "École des Loustics - Jeux Éducatifs",
    date: "Mars 2025",
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
    title: "Plateforme de Gestion de Stages",
    date: "Février 2025",
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
  7: {
    title: "Thibou - Guide de Musée Intelligent",
    date: "Janvier 2025",
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
  8: {
    title: "Site Web Institutionnel Capgemini",
    date: "Octobre 2023",
    category: "Développement Web",
    description:
      "Dans le cadre d'un projet académique, j'ai travaillé sur la conception et la réalisation du site web institutionnel fictif de Capgemini, une entreprise leader dans le secteur du numérique. L'objectif principal était de créer un site pratique et accessible, destiné aux élèves de 3ème en recherche de stage, en leur fournissant des informations compréhensibles sur l'entreprise.",
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
  9: {
    title: "Classificateur de Dépêches Journalistiques",
    date: "Janvier 2024",
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
};

export const projects: ProjectCard[] = [
  {
    id: 1,
    title: "SILOSE - Silabo",
    date: "Septembre 2025 - Août 2026",
    description:
      "Alternance : migration backend CodeIgniter 3 vers 4 et tests PHPUnit",
    tags: ["PHP", "CodeIgniter 4", "PHPUnit"],
  },
  {
    id: 2,
    title: "MANGO - Gestion musicale",
    date: "Janvier 2026",
    description:
      "API REST Node.js/MongoDB et application Angular pour gérer albums, artistes, pistes, studios et beatmakers",
    tags: ["Angular", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "PCPWidget - Visualisation",
    date: "Avril 2025 - Juillet 2025",
    description:
      "Outil de visualisation C++/Qt6 pour données multidimensionnelles avec coordonnées parallèles",
    tags: ["C++17", "Qt6", "Python"],
  },
  {
    id: 4,
    title: "ACDeces - Pompes Funèbres",
    date: "Juin 2024",
    description:
      "Application JavaFX de gestion complète pour pompes funèbres avec calendrier et planning",
    tags: ["Java", "JavaFX"],
  },
  {
    id: 5,
    title: "École des Loustics",
    date: "Mars 2025",
    description:
      "Application éducative Android avec mini-jeux pour développer les compétences en mathématiques",
    tags: ["Android Java", "Room DB"],
  },
  {
    id: 6,
    title: "Gestion de Stages",
    date: "Février 2025",
    description:
      "Solution complète de gestion des stages avec back-office web et application mobile Android",
    tags: ["Symfony", "Android", "API REST"],
  },
  {
    id: 7,
    title: "Thibou - Guide de Musée",
    date: "Janvier 2025",
    description:
      "Application web d'optimisation de parcours dans un musée avec itinéraires personnalisés",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 8,
    title: "Site Institutionnel Capgemini",
    date: "Octobre 2023",
    description:
      "Conception et réalisation du site web institutionnel de Capgemini pour les élèves de 3ème",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Classificateur de Dépêches",
    date: "Janvier 2024",
    description:
      "Programme Java de classification automatique de dépêches journalistiques en 5 catégories prédéfinies",
    tags: ["Java", "Algorithmique"],
  },
];
