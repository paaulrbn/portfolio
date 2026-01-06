import { useState } from "react";
import { Target, Flag, Wrench, Github } from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";
import { motion, AnimatePresence } from "motion/react";

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
		github: "https://github.com/paaulrbn/S1.01-Programme-de-classification-automatique",
	},
	2: {
		title: "Base de Données du Titanic",
		category: "Base de données",
		description:
			"Ce projet, réalisé en binôme, consiste à analyser le contexte historique et les données relatives au naufrage du Titanic afin de modéliser une base de données. Cette modélisation inclut la création d'un Schéma Entité-Association (SEA) et sa transformation en Schéma Logique de Relations (SLR). Les données sont ensuite implémentées dans une base PostgreSQL et des requêtes sont écrites pour vérifier la conformité des données.",
		competences: [
			"Analyse de données historiques",
			"Modélisation de bases de données (SEA, SLR)",
			"Utilisation de PostgreSQL",
			"Écriture et exécution de requêtes SQL",
			"Validation et test des contraintes",
		],
		objectifs: [
			"Comprendre et synthétiser les informations sur le naufrage",
			"Produire un SEA modélisant les données pertinentes",
			"Transformer le SEA en SLR et l'implémenter",
			"Écrire des tests pour vérifier les contraintes",
			"Extraire des informations pertinentes via des requêtes",
		],
		techniques: [
			"Maîtrise de PostgreSQL pour la création de bases de données",
			"Aptitude à écrire des requêtes SQL complexes",
			"Capacité à tester et valider des contraintes",
		],
		technologies: ["PostgreSQL", "SQL", "Modélisation BDD"],
		github: null,
	},
	3: {
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
	4: {
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
	5: {
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
	6: {
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
	7: {
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
	8: {
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
			"Développement d'interfaces utilisateur complexes avec Qt",
			"Architecture MVC et séparation des responsabilités",
			"Gestion avancée des événements souris et tactiles",
			"Sérialisation/désérialisation JSON pour la persistence",
			"Création de bibliothèques partagées multiplateformes",
			"Développement de bindings ctypes Python-C++",
			"Documentation automatique avec Doxygen",
			"Gestion de projet avec versioning GitLab",
			"Tests et optimisation pour environnements multi-écrans",
		],
		technologies: ["C++17", "Qt6", "CMake", "Python"],
		github: null,
	},
};

const projects = [
	{
		id: 1,
		title: "Classificateur de Dépêches Journalistiques",
		description:
			"Programme Java de classification automatique de dépêches journalistiques en 5 catégories prédéfinies",
		tags: ["Java", "Algorithmique", "Analyse de données"],
	},
	{
		id: 2,
		title: "Base de Données du Titanic",
		description:
			"Modélisation complète d'une base de données PostgreSQL sur le naufrage du Titanic avec SEA et SLR",
		tags: ["PostgreSQL", "SQL", "Modélisation BDD"],
	},
	{
		id: 3,
		title: "Site Web Institutionnel Capgemini",
		description:
			"Conception et réalisation du site web institutionnel de Capgemini pour les élèves de 3ème",
		tags: ["HTML", "CSS", "JavaScript", "Whimsical"],
	},
	{
		id: 4,
		title: "Thibou - Guide de Musée Intelligent",
		description:
			"Application web d'optimisation de parcours dans un musée avec itinéraires personnalisés",
		tags: ["React", "Next.js", "TypeScript", "PostgreSQL"],
	},
	{
		id: 5,
		title: "Plateforme de Gestion de Stages",
		description:
			"Solution complète de gestion des stages avec back-office web et application mobile Android",
		tags: ["Symfony", "Android Java", "API REST", "PostgreSQL"],
	},
	{
		id: 6,
		title: "École des Loustics - Jeux Éducatifs",
		description:
			"Application éducative Android avec mini-jeux pour développer les compétences en mathématiques",
		tags: ["Android Java", "Room Database", "Architecture MVC"],
	},
	{
		id: 7,
		title: "ACDeces - Logiciel de Pompes Funèbres",
		description:
			"Application JavaFX de gestion complète pour pompes funèbres avec calendrier et planning",
		tags: ["Java", "JavaFX", "FXML", "Architecture MVC"],
	},
	{
		id: 8,
		title: "PCPWidget - Visualisation Interactive",
		description:
			"Outil de visualisation C++/Qt6 pour données multidimensionnelles avec coordonnées parallèles",
		tags: ["C++17", "Qt6", "CMake", "Python"],
	},
];

function Project() {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const openModal = (projectId: number) => {
		setSelectedProject(projectId);
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
	};

	const closeModal = () => {
		setSelectedProject(null);
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";
	};
	const project = selectedProject ? projectsData[selectedProject] : null;

	return (
		<>
			<section className="flex flex-col justify-center m-8 mt-24 gap-10">
				<h2
					className="text-6xl font-medium"
					style={{ fontFamily: "Monument Extended" }}
				>
					MES PROJETS
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
					{projects.map((proj) => {
						const content = (
							<>
								<div className="absolute top-2 left-6 text-7xl font-bold text-white/10">
									{String(proj.id).padStart(2, "0")}
								</div>

								<h3 className="text-2xl font-bold mt-6 mb-4 bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent relative z-10 leading-tight">
									{proj.title}
								</h3>

								<p className="text-white/70 text-sm leading-relaxed mb-6 grow">
									{proj.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6 -translate-x-3">
									{proj.tags.map((tag, index) => (
										<span
											key={index}
											className="bg-white/8 text-white/60 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="text-white/80 font-medium inline-flex items-center gap-2 text-sm hover:text-white transition-colors self-start mt-auto">
									Voir les détails
									<span className="transition-transform group-hover:translate-x-1">
										→
									</span>
								</div>
							</>
						);

						return (
							<TiltedCard
								key={proj.id}
								className="h-full"
								overlayContent={
									<div
										onClick={() => openModal(proj.id)}
										className="p-6 flex flex-col h-full cursor-pointer"
									>
										{content}
									</div>
								}
							>
								<div className="rounded-3xl border border-[#333333]/30 backdrop-blur-md relative overflow-hidden w-full h-full flex flex-col bg-linear-to-br from-[#111111] to-[#1a1a1acc]">
									<div
										className="absolute top-0 left-0 right-0 h-px"
										style={{
											background:
												"linear-gradient(90deg, transparent 0%, rgba(243, 243, 236, 0.1) 50%, transparent 100%)",
										}}
									/>
									<div className="opacity-0 pointer-events-none p-6 flex-1 flex flex-col">
										{content}
									</div>
								</div>
							</TiltedCard>
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
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-hidden cursor-pointer"
						onClick={closeModal}
						onWheel={(e) => e.preventDefault()}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							transition={{
								duration: 0.3,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="relative bg-linear-to-br from-[#111111] to-[#1a1a1acc] w-full max-w-5xl max-h-[90vh] rounded-4xl border border-[#333333]/30 backdrop-blur-2xl flex flex-col overflow-hidden cursor-default"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header */}
							<div className="sticky top-0 flex justify-between items-center p-8 border-b border-[#333333]/30 bg-inherit backdrop-blur-2xl rounded-t-4xl z-10">
								<h2 className="text-3xl font-semibold bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent">
									{project.title}
								</h2>
								<button
									onClick={closeModal}
									className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/60 hover:text-white/90 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer"
								>
									<img
										src="star-icon.png"
										alt="Close"
										className="w-8 h-8 rotate-45"
									/>
								</button>
							</div>

							{/* Body */}
							<div
								className="overflow-y-auto flex-1 p-8"
								onWheel={(e) => e.stopPropagation()}
							>
								<div className="inline-block bg-linear-to-br from-[#F3F3EC]/10 to-[#F3F3EC]/5 px-4 py-2 rounded-full text-sm font-regular mb-6 border border-[#F3F3EC]/10 -translate-x-4">
									{project.category}
								</div>

								<div className="mb-8">
									<p className="leading-relaxed">
										{project.description}
									</p>
								</div>

								<div className="mb-8">
									<h4 className="text-lg font-semibold mb-4 bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent">
										Technologies utilisées
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map(
											(tech: string, index: number) => (
												<span
													key={index}
													className="bg-linear-to-br from-[#F3F3EC]/8 to-[#F3F3EC]/3 text-[#F3F3EC]/80 px-3 py-2 rounded-xl text-sm font-regular border border-[#F3F3EC]/10 -translate-x-2"
												>
													{tech}
												</span>
											)
										)}
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
									<div>
										<h4 className="text-base font-semibold mb-4 flex items-center gap-2 bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent">
											<span className="flex items-center justify-center w-6 h-6 text-[#F3F3EC]/70">
												<Target size={20} />
											</span>
											Compétences
										</h4>
										<ul className="space-y-2">
											{project.competences.map(
												(
													comp: string,
													index: number
												) => (
													<li
														key={index}
														className="text-[#F3F3EC]/70 text-sm leading-relaxed pl-0.5 relative flex items-start gap-2"
													>
														<img
															src="/star-icon.png"
															alt=""
															className="w-5 h-5 mt-0.5 shrink-0"
														/>
														<span>{comp}</span>
													</li>
												)
											)}
										</ul>
									</div>

									<div>
										<h4 className="text-base font-semibold mb-4 flex items-center gap-2 bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent">
											<span className="flex items-center justify-center w-6 h-6 text-[#F3F3EC]/70">
												<Flag size={20} />
											</span>
											Objectifs
										</h4>
										<ul className="space-y-2">
											{project.objectifs.map(
												(
													obj: string,
													index: number
												) => (
													<li
														key={index}
														className="text-[#F3F3EC]/70 text-sm leading-relaxed pl-0.5 relative flex items-start gap-2"
													>
														<img
															src="/star-icon.png"
															alt=""
															className="w-5 h-5 mt-0.5 shrink-0"
														/>
														<span>{obj}</span>
													</li>
												)
											)}
										</ul>
									</div>

									<div>
										<h4 className="text-base font-semibold mb-4 flex items-center gap-2 bg-linear-to-br from-[#F3F3EC] to-gray-400 bg-clip-text text-transparent">
											<span className="flex items-center justify-center w-6 h-6 text-[#F3F3EC]/70">
												<Wrench size={20} />
											</span>
											Techniques acquises
										</h4>
										<ul className="space-y-2">
											{project.techniques.map(
												(
													tech: string,
													index: number
												) => (
													<li
														key={index}
														className="text-[#F3F3EC]/70 text-sm leading-relaxed pl-0.5 relative flex items-start gap-2"
													>
														<img
															src="/star-icon.png"
															alt=""
															className="w-5 h-5 mt-0.5 shrink-0"
														/>
														<span>{tech}</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>

								{project.github && (
									<div className="text-center mt-8">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#F3F3EC]/10 to-[#F3F3EC]/5 text-[#F3F3EC]/90 rounded-xl font-medium border border-[#F3F3EC]/20 hover:from-[#F3F3EC]/15 hover:to-[#F3F3EC]/8 hover:shadow-2xl transition-all"
										>
											<Github size={18} />
											<span>Voir sur GitHub</span>
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
