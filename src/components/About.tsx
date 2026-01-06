import {
	User,
	Target,
	Briefcase,
	GraduationCap,
	Code,
	Wrench,
} from "lucide-react";
import TiltedCard from "./ReactBits/TiltedCard";

// Styles communs
const cardStyle = {
	background:
		"linear-gradient(135deg, #111111 0%, rgba(26, 26, 26, 0.8) 100%)",
	borderColor: "rgba(51, 51, 51, 0.3)",
};

const CardBackground = ({ children }: { children: React.ReactNode }) => (
	<div
		className="rounded-3xl border backdrop-blur-md relative overflow-hidden w-full h-full"
		style={cardStyle}
	>
		{/* Ligne brillante en haut */}
		<div
			className="absolute top-0 left-0 right-0 h-px"
			style={{
				background:
					"linear-gradient(90deg, transparent 0%, rgba(243, 243, 236, 0.1) 50%, transparent 100%)",
			}}
		/>
		{/* Contenu invisible pour définir la hauteur */}
		<div className="opacity-0 pointer-events-none p-6">{children}</div>
	</div>
);

const SectionTitle = ({ icon: Icon, title }: { icon: any; title: string }) => (
	<h3 className="text-lg font-bold mb-5 flex items-center gap-3">
		<Icon size={24} />
		{title}
	</h3>
);

// Composants de contenu
const WhoAmI = () => {
	const content = (
		<>
			<SectionTitle icon={User} title="Qui suis-je" />
			<div className="flex flex-col gap-4">
				<p className="opacity-80 leading-relaxed">
					Je m'appelle Paul Roubinet, j'ai 20 ans et je suis étudiant
					en 2ème année de BUT Informatique à l'IUT2 de Grenoble, dans
					le parcours réalisation d'applications.
				</p>
				<p className="opacity-80 leading-relaxed">
					Je suis développeur Fullstack junior passionné par le
					développement web, le développement d'applications et la
					cybersécurité.
				</p>
				<p className="opacity-80 leading-relaxed">
					Titulaire du permis B, je suis toujours curieux d'apprendre
					de nouvelles technologies. J'ai développé mes compétences en
					autodidacte en parallèle de ma formation.
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
					Mon objectif est de me spécialiser en développement
					d'applications et cybersécurité tout en restant ouvert aux
					opportunités qui se présentent. Je souhaite apporter des
					solutions innovantes, efficaces et sécurisées.
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

const Experience = () => {
	const content = (
		<>
			<SectionTitle icon={Briefcase} title="Expérience" />
			<div className="flex flex-col gap-8 relative">
				{/* Trait de liaison SVG */}
				<svg className="absolute left-0 top-0 w-8 h-full pointer-events-none">
					<line
						x1="37%"
						y1="5%"
						x2="37%"
						y2="62%"
						stroke="rgba(243,243,236,0.15)"
						strokeWidth="2"
					/>
				</svg>

				{/* timeline */}
				<img
					src="star-icon.png"
					alt="star"
					className="absolute top-0 -left-1 w-8 h-8  "
				/>
				<img
					src="star-icon.png"
					alt="star"
					className="absolute top-35 -left-1 w-8 h-8  "
				/>

				{/* Timeline Item 1 */}
				<div className="pl-9 relative">
					<div
						className="inline-block px-2 py-1 rounded font-medium text-sm opacity-80 mb-2 -translate-x-2"
						style={{ background: "rgba(243, 243, 236, 0.05)" }}
					>
						Avril 2025 - Juillet 2025
					</div>
					<h4 className="font-semibold mb-1">
						Stage - Laboratoire G-SCOP, Grenoble
					</h4>
					<p className="text-sm opacity-60 leading-relaxed">
						Développement d'un outil d'aide à la décision
						multi-critère de type graphe en coordonnées parallèles
						en C++
					</p>
				</div>

				{/* Timeline Item 2 */}
				<div className="pl-9 relative">
					<div
						className="inline-block px-2 py-1 rounded font-medium text-sm opacity-80 mb-2 -translate-x-2"
						style={{ background: "rgba(243, 243, 236, 0.05)" }}
					>
						Décembre 2019
					</div>
					<h4 className="font-semibold mb-1">
						Stage de 3ème - AFB, Saint-Égrève
					</h4>
					<p className="text-sm opacity-60 leading-relaxed">
						Diagnostic matériel et logiciel, remplacement de
						composants défectueux, configuration de systèmes
						Windows.
					</p>
				</div>
			</div>
		</>
	);

	return (
		<TiltedCard overlayContent={<div className="p-6">{content}</div>}>
			<CardBackground>{content}</CardBackground>
		</TiltedCard>
	);
};

const Education = () => {
	const content = (
		<>
			<SectionTitle icon={GraduationCap} title="Parcours" />
			<div className="flex flex-col gap-8 relative">
				{/* Trait de liaison SVG */}
				<svg className="absolute left-0 top-0 w-8 h-full pointer-events-none">
					<line
						x1="37%"
						y1="5%"
						x2="37%"
						y2="55%"
						stroke="rgba(243,243,236,0.15)"
						strokeWidth="2"
					/>
				</svg>

				{/* timeline */}
				<img
					src="star-icon.png"
					alt="star"
					className="absolute top-0 -left-1 w-8 h-8  "
				/>
				<img
					src="star-icon.png"
					alt="star"
					className="absolute top-29.5 -left-1 w-8 h-8  "
				/>

				{/* Timeline Item 1 */}
				<div className="pl-9 relative">
					<div
						className="inline-block px-2 py-1 rounded font-medium text-sm opacity-80 mb-2 -translate-x-2"
						style={{ background: "rgba(243, 243, 236, 0.05)" }}
					>
						2023 - Présent
					</div>
					<h4 className="font-semibold mb-1">
						BUT Informatique, parcours réalisation d'applications
					</h4>
					<p className="text-sm opacity-60 leading-relaxed">
						IUT2 de Grenoble
					</p>
				</div>

				{/* Timeline Item 2 */}
				<div className="pl-9 relative">
					<div
						className="inline-block px-2 py-1 rounded font-medium text-sm opacity-80 mb-2 -translate-x-2"
						style={{ background: "rgba(243, 243, 236, 0.05)" }}
					>
						2020 - 2023
					</div>
					<h4 className="font-semibold mb-1">Baccalauréat général</h4>
					<p className="text-sm opacity-60 leading-relaxed">
						Lycée Les Eaux Claires, mention assez bien
						<br />
						Spécialités : Mathématiques, NSI (Numérique et Sciences
						Informatiques) et Anglais
					</p>
				</div>
			</div>
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

function About() {
	return (
		<section className="flex flex-col justify-center m-8 mt-24 gap-10">
			<h2
				className="text-6xl font-medium"
				style={{ fontFamily: "Monument Extended" }}
			>
				À PROPOS
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default About;
