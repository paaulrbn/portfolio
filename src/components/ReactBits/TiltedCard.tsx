import type { SpringOptions } from "motion/react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface TiltedCardProps {
	children: React.ReactNode;
	overlayContent?: React.ReactNode;
	className?: string;
	scaleOnHover?: number;
	rotateAmplitude?: number;
	showTooltip?: boolean;
	captionText?: string;
}

const springValues: SpringOptions = {
	damping: 30,
	stiffness: 100,
	mass: 2,
};

export default function TiltedCard({
	children,
	overlayContent,
	className = "",
	scaleOnHover = 1.05,
	rotateAmplitude = 12,
	showTooltip = false,
	captionText = "",
}: TiltedCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useMotionValue(0), springValues);
	const rotateY = useSpring(useMotionValue(0), springValues);
	const scale = useSpring(1, springValues);
	const opacity = useSpring(0);
	const rotateFigcaption = useSpring(0, {
		stiffness: 350,
		damping: 30,
		mass: 1,
	});

	const [lastY, setLastY] = useState(0);

	function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;

		const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
		const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

		rotateX.set(rotationX);
		rotateY.set(rotationY);

		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);

		const velocityY = offsetY - lastY;
		rotateFigcaption.set(-velocityY * 0.6);
		setLastY(offsetY);
	}

	function handleMouseEnter() {
		scale.set(scaleOnHover);
		opacity.set(1);
	}

	function handleMouseLeave() {
		opacity.set(0);
		scale.set(1);
		rotateX.set(0);
		rotateY.set(0);
		rotateFigcaption.set(0);
	}

	return (
		<div
			className={`w-full h-full ${className}`}
			style={{ perspective: "5000px" }}
		>
			<motion.div
				ref={ref}
				className="relative w-full h-full"
				style={{
					rotateX,
					rotateY,
					scale,
					transformStyle: "preserve-3d",
				}}
				onMouseMove={handleMouse}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div
					className="h-full"
					style={{ transform: "translateZ(0px)" }}
				>
					{children}
				</div>

				{overlayContent && (
					<div
						className="absolute inset-0 pointer-events-auto"
						style={{ transform: "translateZ(50px)" }}
					>
						{overlayContent}
					</div>
				)}

				{showTooltip && captionText && (
					<motion.div
						className="pointer-events-none absolute left-0 top-0 rounded-md bg-white px-3 py-1.5 text-xs text-black z-50 hidden sm:block"
						style={{
							x,
							y,
							opacity,
							rotate: rotateFigcaption,
						}}
					>
						{captionText}
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}
