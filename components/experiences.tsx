import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ROLES = [
  {
    period: "Sep 2025 — Present",
    title: "Frontend Developer · Rezerv (Codigo)",
    body: "Work with PMs and backend engineers through Scrum sprints to ship referral, payment, reporting, and payroll features for a B2B SaaS platform.",
  },
  {
    period: "Mar 2025 — Sep 2025",
    title: "React Developer · Oway Travel",
    body: "Worked with PMs and backend engineers to modernize legacy web flows, improve SEO, and build loyalty and local-payment features.",
  },
  {
    period: "Jun 2023 — Mar 2025",
    title: "Junior → Senior Web Developer · UMG",
    body: "Built full-stack internal systems, led junior developers, managed private-server deployments, and reduced API traffic and load times with Redis caching.",
  },
  {
    period: "Feb 2023 — Jun 2023",
    title: "Web Developer Intern · ExBrain Co.Ltd",
    body: "Learned Vue.js through production work, collaborated with the development team, and developed disciplined coding habits under senior mentorship.",
  },
];

export function Experiences() {
  return (
    <Reveal className="mx-auto max-w-230 px-4 sm:px-8">
      <section id="experiences" className="pt-16 sm:pt-22">
        <SectionHeading label="Experience" className="mb-1.5" />
        <div className="flex flex-col">
          {ROLES.map((role) => (
            <div
              key={role.period}
              className="grid grid-cols-1 gap-5.5 border-b border-pf-line py-5.5 sm:grid-cols-[130px_1fr]"
            >
              <span className="pt-0.75 text-xs text-pf-muted [font-variant-numeric:tabular-nums]">
                {role.period}
              </span>
              <div>
                <span className="font-heading text-[16.5px] font-medium">{role.title}</span>
                <p className="mt-1.5 max-w-[55ch] text-sm leading-[1.6] text-pf-body">
                  {role.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
