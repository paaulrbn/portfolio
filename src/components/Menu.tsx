import { useEffect } from "react";

interface MenuProps {
	isOpen: boolean;
	onClose: () => void;
}

function Menu({ isOpen, onClose }: MenuProps) {
	// Empêcher le scroll quand le menu est ouvert
	useEffect(() => {
		if (isOpen) {
			const scrollBarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollBarWidth}px`;
			document.documentElement.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
			document.body.style.paddingRight = "";
			document.documentElement.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
			document.body.style.paddingRight = "";
			document.documentElement.style.overflow = "";
		};
	}, [isOpen]);

	// Fermer avec Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const menuItems = [
		{ label: "ACCUEIL", href: "#" },
		{ label: "À PROPOS", href: "#about" },
		{ label: "PROJETS", href: "#projects" },
		{ label: "CONTACT", href: "#contact" },
	];

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
			onClick={onClose}
		>
			<div
				className="relative w-full h-full flex flex-col items-center justify-center p-8"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Bouton fermer */}
				<button
					onClick={onClose}
					className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors group"
					aria-label="Fermer le menu"
				>
					<img
						src="/star-icon.png"
						alt="Fermer"
						className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500"
					/>
				</button>

				{/* Navigation principale */}
				<nav className="flex flex-col items-start gap-8">
					{menuItems.map((item, index) => (
						<a
							key={item.label}
							href={item.href}
							onClick={onClose}
							className="text-9xl md:text-8xl sm:text-7xl animate-slide-up"
							style={{
								fontFamily: "Cirka",
								animationDelay: `${index * 0.1}s`,
							}}
						>
							{item.label}
						</a>
					))}
				</nav>
			</div>

			<style>
				{`
					@keyframes fade-in {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					@keyframes slide-up {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.animate-fade-in {
						animation: fade-in 0.3s ease-out;
					}
					.animate-slide-up {
						opacity: 0;
						animation: slide-up 0.6s ease-out forwards;
					}
				`}
			</style>
		</div>
	);
}

export default Menu;
