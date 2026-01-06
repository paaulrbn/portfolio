import React from "react";
import ExploreIndicator from "./ExploreIndicator";

interface HeroProps {
	onMenuClick: () => void;
}

function Hero({ onMenuClick }: HeroProps) {
	const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMouse({
				x: Math.round(e.clientX),
				y: Math.round(e.clientY),
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="flex flex-col items-start justify-between h-screen w-full p-8 relative">
			<div className="flex justify-between w-full">
				<p className="min-w-64 text-left">
					GRENOBLE, FRANCE
					<span className="ml-12">
						{(() => {
							const [time, setTime] = React.useState(
								new Date().toLocaleTimeString("fr-FR", {
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
								})
							);
							React.useEffect(() => {
								const interval = setInterval(() => {
									setTime(
										new Date().toLocaleTimeString("fr-FR", {
											hour: "2-digit",
											minute: "2-digit",
											hour12: false,
										})
									);
								}, 1000);
								return () => clearInterval(interval);
							}, []);
							return time;
						})()}
					</span>
				</p>
				<p>Web Developer</p>

				<button
					onClick={onMenuClick}
					className="min-w-64 text-right hover:opacity-70 transition-opacity cursor-pointer"
				>
					MENU
				</button>
			</div>

			<h1
				className="text-9xl"
				style={{ fontFamily: "Monument Extended" }}
			>
				PAUL ROUBINET
			</h1>

			<div className="max-w-80 text-left">
				<p>
					Étudiant en BUT Informatique à l'IUT2 de Grenoble. Passionné
					par la technologie et la programmation, je développe des
					solutions créatives et fonctionnelles.
				</p>
			</div>

			<div
				className="flex flex-row gap-0 justify-end"
				style={{ letterSpacing: "0.08em", fontFamily: "Andale Mono" }}
			>
				<div className="flex flex-col text-[#515151]">
					<span>[X]</span>
					<span>[Y]</span>
				</div>
				<div className="flex flex-col">
					<span>.{mouse.x}PX</span>
					<span>.{mouse.y}PX</span>
				</div>
			</div>

			<ExploreIndicator className="absolute left-1/2 -translate-x-1/2 bottom-0" />

			<img
				className="animate-spin-slow"
				style={{
					minWidth: "80vw",
					minHeight: "80vw",
					maxWidth: "80vw",
					maxHeight: "80vw",
					position: "absolute",
					right: "-30vw",
					bottom: "-25vw",
					zIndex: "-1",
				}}
				src="star.png"
				alt="star"
				loading="lazy"
				decoding="async"
			/>
			<style>
				{`
					@keyframes spin-slow {
						from { transform: rotate(0deg);}
						to { transform: rotate(360deg);}
					}
					.animate-spin-slow {
						animation: spin-slow 480s linear infinite;
					}
				`}
			</style>
		</div>
	);
}

export default Hero;
