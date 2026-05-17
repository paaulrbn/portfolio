import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const exitCurve = [0.76, 0, 0.24, 1] as const;
const MIN_MS = 900;
const MAX_WAIT_MS = 12000;
const TICK_MS = 32;

interface SiteLoaderProps {
  onComplete: () => void;
}

function waitWindowLoad(): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function preloadSilk(): Promise<unknown> {
  return import("./ReactBits/Silk");
}

export default function SiteLoader({ onComplete }: SiteLoaderProps) {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const completeRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const preloader = document.getElementById("js-preloader");
    if (preloader) preloader.style.display = "none";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const start = performance.now();

    intervalRef.current = setInterval(() => {
      if (completeRef.current) return;
      const elapsed = performance.now() - start;
      const raw = 1 - Math.exp(-elapsed / 600);
      setProgress(Math.min(0.95, raw));
    }, TICK_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const minWait = new Promise<void>((r) => setTimeout(r, MIN_MS));

    const ready = Promise.all([
      document.fonts.ready.catch(() => undefined),
      waitWindowLoad(),
      preloadSilk().catch(() => undefined),
      minWait,
    ]);

    const timeout = new Promise<void>((r) => setTimeout(r, MAX_WAIT_MS));

    Promise.race([ready, timeout]).then(() => {
      if (cancelled) return;
      completeRef.current = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(1);
      const delayOut = reduceMotion ? 60 : 400;
      window.setTimeout(() => {
        if (cancelled) return;
        onComplete();
        setShow(false);
      }, delayOut);
    });

    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  const displayPercent = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="site-loader"
          role="status"
          aria-live="polite"
          aria-label="Chargement du site"
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { y: "-100%" }
          }
          transition={{
            duration: reduceMotion ? 0.1 : 0.65,
            ease: exitCurve,
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#060608] px-6"
        >
          <p
            className="font-sf-hero text-center text-3xl leading-none tracking-[-0.01em] text-[#e8e8e0]"
          >
            Paul Roubinet
          </p>

          <span
            className="mt-6 text-[#e8e8e0]/75"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "1.2rem",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.12em",
            }}
            aria-label={`${displayPercent} pourcent`}
          >
            {String(displayPercent).padStart(2, "\u2007")}<span style={{ opacity: 0.7 }}>%</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
