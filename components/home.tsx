import { FileUser } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TAGS = ["TypeScript", "Python", "React", "Vue", "Next", "Node", "Laravel", "SQL", "AWS"];

const STATS = [
  { value: "3+", label: "Years shipping" },
  { value: "[9]", label: "Products in prod" },
  { value: "[99.9]%", label: "Uptime held" },
  { value: "[5]", label: "Teams shipped with" },
];

export function Home() {
  return (
    <div id="top" className="relative z-10 overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-30 -top-45 h-105 w-140"
        style={{ background: "radial-gradient(closest-side, var(--pf-sky-tint), transparent)" }}
      />

      <div className="mx-auto max-w-230 px-4 sm:px-8">
        <Reveal immediate>
          <section className="relative pt-20 sm:pt-26">
            <div className="mb-7.5 inline-flex items-center gap-2 rounded-full border border-pf-line py-1.25 pl-2.5 pr-3">
              <span className="h-1.5 w-1.5 animate-pf-pulse rounded-full bg-pf-sky" />
              <span className="text-[11.5px] tracking-wider text-pf-muted">
                Open to [full-time / part-time] work
              </span>
            </div>

            <h1 className="mb-7 max-w-[20ch] text-[34px] font-medium leading-[1.14] tracking-[-0.03em] text-pretty sm:text-[44px] lg:text-[52px]">
              I&apos;m Aung Kaung Moe, a software engineer who builds products that feel{" "}
              <span
                className="[box-shadow:inset_0_-2px_0_var(--pf-sky)]"
                style={{
                  background: "linear-gradient(to top, var(--pf-sky-tint) 0 34%, transparent 34%)",
                }}
              >
                intuitive
              </span>
              .
            </h1>

            <p className="mb-8.5 max-w-[58ch] text-[16px] leading-[1.7] text-pf-body text-pretty sm:text-[18px]">
              Nearly four years in product engineering, now focused on SaaS, product growth, and turning code into revenue. I’m exploring how AI can remove friction, unlock new workflows, and make software more capable.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="/assets/pdf/akm-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg text-white border border-pf-sky bg-pf-sky px-4.75 py-2.75 font-heading text-sm font-medium transition-[box-shadow,transform,filter] duration-200 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_6px_26px_var(--pf-sky-tint)]"
              >
                <FileUser size={14} />
                Resume (PDF)
              </a>
              <a
                href="#contact"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-pf-line px-4.75 py-2.75 font-heading text-sm font-medium text-pf-muted transition-colors hover:border-pf-muted hover:bg-pf-tint hover:text-pf-text"
              >
                Contact me
              </a>
            </div>

            <div className="mt-9.5 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-pf-line px-2.75 py-1 text-[11.5px] tracking-[0.04em] text-pf-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <section className="mt-16 border-y border-pf-sky-fill bg-[#3B63CA] sm:mt-24">
          <div className="mx-auto grid max-w-230 grid-cols-2 gap-7 px-4 py-8 sm:grid-cols-4 sm:px-8 sm:py-9.5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-[26px] font-medium tracking-[-0.02em] text-white [font-variant-numeric:tabular-nums] sm:text-[30px]">
                  {stat.value}
                </div>
                <div className="mt-1.25 text-[11.5px] uppercase tracking-[0.07em] text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
