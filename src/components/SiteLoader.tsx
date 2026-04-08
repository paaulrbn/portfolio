import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;
const exitCurve = [0.76, 0, 0.24, 1] as const;
const MIN_MS = 720;
const MAX_WAIT_MS = 12000;

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
  const rafRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const start = performance.now();
    const tick = () => {
      if (completeRef.current) return;
      const elapsed = performance.now() - start;
      const raw = 1 - Math.exp(-elapsed / 600);
      setProgress(Math.min(0.95, raw));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
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

    const timeout = new Promise<void>((r) =>
      setTimeout(r, MAX_WAIT_MS),
    );

    Promise.race([ready, timeout]).then(() => {
      if (cancelled) return;
      completeRef.current = true;
      cancelAnimationFrame(rafRef.current);
      setProgress(1);
      const delayOut = reduceMotion ? 60 : 350;
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
          initial={{ y: "0%" }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { y: "-100%" }
          }
          transition={{
            duration: reduceMotion ? 0.1 : 0.65,
            ease: exitCurve,
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060608] px-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />

          <motion.p
            className="font-sf-hero text-center text-[clamp(1.05rem,3vw,1.6rem)] leading-none tracking-[-0.01em] text-[#e8e8e0]"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease, delay: 0.04 }}
          >
            Paul Roubinet
          </motion.p>

          <motion.span
            className="mt-6 text-[#e8e8e0]/75"
            style={{
              fontFamily: '"Andale Mono", monospace',
              fontSize: "1.2rem",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.12em",
            }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            aria-label={`${displayPercent} pourcent`}
          >
            {String(displayPercent).padStart(2, "\u2007")}<span className="opacity-70">%</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
