import { useEffect, useRef, useState } from "react";

const MIN_MS = 900;
const MAX_WAIT_MS = 12000;
const TICK_MS = 32;

function getRevealMs(): number {
  const v = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--reveal-dur"),
  );
  return Number.isFinite(v) ? v : 400;
}

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
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const completeRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const skelRef = useRef<HTMLDivElement>(null);

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
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
      skelRef.current?.classList.add("is-revealed");

      const revealMs = reduceMotion ? 0 : getRevealMs();
      const pauseAfterReveal = reduceMotion ? 60 : 400;

      window.setTimeout(() => {
        if (cancelled) return;
        setExiting(true);
        const exitMs = reduceMotion ? 60 : 650;
        window.setTimeout(() => {
          if (cancelled) return;
          onComplete();
          setShow(false);
        }, exitMs);
      }, revealMs + pauseAfterReveal);
    });

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  const displayPercent = Math.round(progress * 100);
  const percentStr = String(displayPercent).padStart(2, "\u2007");

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Chargement du site"
      className={`t-site-loader-exit fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#060608] px-6 ${
        exiting ? "is-exiting" : ""
      }`}
    >
      <div
        ref={skelRef}
        className="t-skel w-full max-w-xs"
        style={{ minHeight: "5rem" }}
      >
        <div className="t-skel-skeleton is-pulsing flex flex-col items-center">
          <div className="h-9 w-48 rounded-md bg-[#e8e8e0]/12" />
          <span
            className="mt-6 text-[#e8e8e0]/40 tabular-nums"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "1.2rem",
              letterSpacing: "0.12em",
            }}
          >
            {percentStr}<span style={{ opacity: 0.7 }}>%</span>
          </span>
        </div>

        <div className="t-skel-content flex flex-col items-center">
          <p className="font-sf-hero text-center text-3xl leading-none tracking-[-0.01em] text-[#e8e8e0]">
            Paul Roubinet
          </p>

          <span
            className="mt-6 text-[#e8e8e0]/75 tabular-nums"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "1.2rem",
              letterSpacing: "0.12em",
            }}
            aria-label={`${displayPercent} pourcent`}
          >
            {percentStr}<span style={{ opacity: 0.7 }}>%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
