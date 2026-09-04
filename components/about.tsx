import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const FACTS = [
  { label: "Based in", value: "Yangon, Myanmar" },
  { label: "Works in", value: "MMT (UTC+6:30) · remote-friendly with flexible hours" },
  {
    label: "Best at",
    value:
      "Full-stack product development, complex SaaS workflows, and turning unclear requirements into shippable features",
  },
];

export function About() {
  return (
    <div className="mx-auto max-w-230 px-4 sm:px-8">
      <Reveal>
        <section id="about" className="pt-16 sm:pt-22">
          <SectionHeading label="About" />
          <div className="grid grid-cols-1 items-start gap-11 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-3.5 text-[15.5px] leading-[1.75] text-pf-text text-pretty">
                I started coding in 2022 without a computer science or IT
                background, learning HTML and CSS from YouTube. An 80%
                scholarship for a Java course introduced me to OOP and logical
                thinking. I then joined an online full-stack bootcamp, where
                weekly JavaScript and PHP assignments prepared me for my first
                internship in 2023.
                <br/>
                I later grew from a Junior to Senior Web
                Developer at UMG, taking on full-stack development, deployments,
                and mentoring junior developers. At Oway Travel, I taught myself
                Next.js while building a new loyalty system. Today, I work on
                B2B SaaS products at Rezerv, turning complex requirements into
                useful production features.
                <br/>
                I’ve learned that not knowing
                something yet has never stopped me from building it.
              </p>
              <p className="text-[15.5px] leading-[1.75] text-pf-body text-pretty">
                Off the clock, I’m usually watching anime or building one of my dream apps with soft or classical music playing. That vibe is hard to beat.
              </p>
            </div>
            <div className="flex flex-col gap-4.5 border-t border-pf-line pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <h3 className="mb-1.5 text-[10.5px] uppercase tracking-[0.12em] text-pf-faint">
                    {fact.label}
                  </h3>
                  <p className="text-sm leading-[1.6]">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="pt-16 sm:pt-22">
          <blockquote className="border-l-2 border-pf-sky pl-6.5">
            <p className="mb-3.5 max-w-[48ch] font-heading text-[18px] font-medium leading-[1.6] tracking-[-0.015em] text-pretty sm:text-[20px]">
              &ldquo;[Aung Kaung stands out for his deep technical expertise, problem-solving skills, and ability to deliver clean, scalable solutions]&rdquo;
            </p>
            <footer className="text-[12.5px] tracking-[0.03em]">
              Lynn Htet Thant, UX Lead at KBZ Bank
            </footer>
          </blockquote>
        </section>
      </Reveal>
    </div>
  );
}
