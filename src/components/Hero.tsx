import React from "react";
import { motion } from "motion/react";
import ExploreIndicator from "./ExploreIndicator";
import BlurText from "./ReactBits/BlurText";

const ease = [0.25, 0.1, 0.25, 1] as const;
const LUMA_THRESHOLD = 25;
const CANVAS_SCALE = 0.5;

function Hero() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [videoSrc, setVideoSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const hasRIC = typeof requestIdleCallback !== "undefined";
    const id = hasRIC
      ? requestIdleCallback(() => setVideoSrc("/ascii.webm"))
      : setTimeout(() => setVideoSrc("/ascii.webm"), 500);
    return () => {
      if (hasRIC) cancelIdleCallback(id as number);
      else clearTimeout(id as number);
    };
  }, []);

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

  React.useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let rafId = 0;
    const hasRVFC = "requestVideoFrameCallback" in video;

    const processFrame = () => {
      if (video.readyState >= 2 && canvas.width > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        try {
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const d = frame.data;
          for (let i = 0; i < d.length; i += 4) {
            const lum = d[i] * 0.2126 + d[i + 1] * 0.7152 + d[i + 2] * 0.0722;
            if (lum < LUMA_THRESHOLD) d[i + 3] = 0;
          }
          ctx.putImageData(frame, 0, 0);
        } catch { /* canvas tainté */ }
      }

      if (hasRVFC) {
        (video as HTMLVideoElement & { requestVideoFrameCallback: (cb: () => void) => void })
          .requestVideoFrameCallback(processFrame);
      } else {
        rafId = requestAnimationFrame(processFrame);
      }
    };

    const initCanvas = () => {
      canvas.width = Math.floor(video.videoWidth * CANVAS_SCALE);
      canvas.height = Math.floor(video.videoHeight * CANVAS_SCALE);
    };

    const resumePlayback = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", initCanvas);
    video.addEventListener("pause", resumePlayback);
    if (video.readyState >= 1) initCanvas();

    if (hasRVFC) {
      (video as HTMLVideoElement & { requestVideoFrameCallback: (cb: () => void) => void })
        .requestVideoFrameCallback(processFrame);
    } else {
      processFrame();
    }

    return () => {
      video.removeEventListener("loadedmetadata", initCanvas);
      video.removeEventListener("pause", resumePlayback);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="flex flex-col items-start min-h-svh w-full px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-24 sm:pb-28 relative overflow-hidden"
    >
      <div className="flex flex-col gap-5 sm:gap-7 mt-auto sm:my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-[-0.03em] text-balance"
          style={{ fontFamily: "Monument Extended" }}
        >
          PAUL
          <br />
          ROUBINET
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="max-w-sm"
        >
          <BlurText
            text="Étudiant en BUT Informatique à l'IUT2 de Grenoble. Passionné par la technologie et la programmation, je développe des solutions créatives et fonctionnelles."
            delay={20}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
            className="text-sm sm:text-base leading-[1.65] opacity-80 max-w-[65ch]"
          />
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.5, ease }}
        className="hidden sm:flex flex-row gap-0 justify-end text-xs"
        style={{ letterSpacing: "0.1em", fontFamily: "Andale Mono" }}
      >
        <div className="flex flex-col text-white/40">
          <span>[X]</span>
          <span>[Y]</span>
        </div>
        <div className="flex flex-col">
          <span>.{mouse.x}PX</span>
          <span>.{mouse.y}PX</span>
        </div>
      </motion.div>

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "1px", opacity: 0, pointerEvents: "none" }}
      >
        {videoSrc && <source src={videoSrc} type="video/webm" />}
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.5, delay: 0.4, ease }}
        aria-hidden="true"
        className="pointer-events-none aspect-auto
                  w-1/2 mx-auto m-4 mb-16
                  sm:w-1/3 sm:right-5 sm:absolute sm:top-1/2 sm:-translate-y-1/2"
        style={{ zIndex: "-1" }}
      >
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
      >
        <ExploreIndicator
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </motion.div>
    </section>
  );
}

export default Hero;
