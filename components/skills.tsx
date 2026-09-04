import { Crosshair, Gauge, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const PRINCIPLES = [
  {
    icon: Crosshair,
    title: "Scope before code",
    body: "I’d rather spend an hour clarifying the problem than a week building the wrong version.",
  },
  {
    icon: Gauge,
    title: "Ship, then learn",
    body: "I ship in small pieces, stay close to product and QA, and let real feedback shape what comes next.",
  },
  {
    icon: Sparkles,
    title: "AI, not autopilot",
    body: "Claude and Codex help me explore and move faster. They suggest; I question, review, and own what ships.",
  },
];

export function Skills() {
  return (
    <Reveal className="mx-auto max-w-230 px-4 sm:px-8">
      <section id="skills" className="pt-16 sm:pt-22">
        <SectionHeading label="How I work" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-pf-sky-fill bg-[#3B63CA] p-5.5"
            >
              <Icon size={18} className="text-white" />
              <h3 className="mb-1.75 mt-3.5 text-base font-medium text-white">{title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-white">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
