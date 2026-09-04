import { cn } from "@/lib/utils";

/** The eyebrow + gradient rule that opens each section in the design. */
export function SectionHeading({
  label,
  aside,
  className,
}: {
  label: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-[14px]", className ?? "mb-[26px]")}>
      <h2 className="text-[11px] uppercase tracking-[0.13em] text-pf-faint">{label}</h2>
      <span
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right, var(--pf-line), transparent)" }}
      />
      {aside ? (
        <span className="text-[11px] tracking-[0.04em] text-pf-faint">{aside}</span>
      ) : null}
    </div>
  );
}
