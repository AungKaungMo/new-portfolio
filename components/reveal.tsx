"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Ports the design's IntersectionObserver behaviour:
 * every section fades + rises into view, except the first (hero) which is
 * shown immediately.
 */
export function Reveal({
  children,
  immediate = false,
  className,
}: {
  children: ReactNode;
  immediate?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        immediate
          ? undefined
          : {
              opacity: shown ? 1 : 0,
              transform: shown ? "none" : "translateY(14px)",
              transition: "opacity 620ms ease, transform 620ms ease",
            }
      }
    >
      {children}
    </div>
  );
}
