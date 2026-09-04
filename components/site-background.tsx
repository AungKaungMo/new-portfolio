const MASK = "linear-gradient(to bottom, #000 0%, #000 46%, transparent 82%)";

/**
 * Fixed decorative layers behind all content: the tiled line-grid pattern and
 * the sky glow. Wrapped in a viewport-clipping container so the oversized glow
 * can't push horizontal scroll on narrow screens.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat opacity-75"
        style={{
          backgroundImage: "url('/assets/images/line-grid.svg')",
          backgroundSize: "1600px 1000px",
          backgroundPosition: "center top",
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      />
      <div
        className="absolute left-1/2 -top-35 h-130 w-225 -translate-x-1/2"
        style={{ background: "radial-gradient(closest-side, var(--pf-sky-tint), transparent)" }}
      />
    </div>
  );
}
