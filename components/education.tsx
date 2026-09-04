import { ArrowUpRight, Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Degree = {
  period: string;
  degree: string;
  school: string;
  note?: string;
};

type Certificate = {
  name: string;
  issuer: string;
  date: string;
  /** Optional credential/verification link. */
  url?: string;
};

const EDUCATION: Degree[] = [
  {
    period: "Apr 2025 — Aug 2026",
    degree: "Bachelor of Science in Computer Science",
    school: "University of the People",
    note: "GPA 3.5",
  },
  {
    period: "Jun 2024 — Nov 2026",
    degree: "Bachelor of Science in Information Technology",
    school: "European International University, Paris",
    note: "Final assignment submitted · awaiting final result.",
  },
];

const CERTIFICATES: Certificate[] = [
  {
    name: "Advanced React",
    issuer: "Meta",
    date: "Apr 2025",
    url: "https://coursera.org/share/0fff872bf7990484b698e24698bf3183",
  },
  {
    name: "IBM Full Stack Software Developer Specialization",
    issuer: "IBM",
    date: "Jun 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/AQM830PIIREA",
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "May 2025",
    url: "https://www.coursera.org/account/accomplishments/records/2GQLDQ9JGSUR",
  },
  {
    name: "Introduction to Agile Development and Scrum",
    issuer: "IBM",
    date: "May 2025",
    url: "https://coursera.org/share/084d6f9ee0b5d477c5d34d8c59b94c92",
  },
  {
    name: "Japanese Language NAT-TEST 3Q",
    issuer: "Japanese Language NAT-TEST",
    date: "Jun 2026",
    url: "https://nat-test.jp/contents/result/result-id26-06-3Q-yg.html#:~:text=26060065531324",
  },
];

const cardClass =
  "group/cert flex flex-col rounded-lg border border-pf-sky-fill bg-[#3B63CA] p-4 transition-[filter] duration-200 hover:brightness-110";

export function Education() {
  return (
    <div className="mx-auto max-w-230 px-4 sm:px-8">
      <Reveal>
        <section id="education" className="pt-16 sm:pt-22">
          <SectionHeading label="Education" className="mb-1.5" />
          <div className="flex flex-col">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree + edu.period}
                className="grid grid-cols-1 gap-5.5 border-b border-pf-line py-5.5 sm:grid-cols-[130px_1fr]"
              >
                <span className="pt-0.75 text-xs text-pf-muted [font-variant-numeric:tabular-nums]">
                  {edu.period}
                </span>
                <div>
                  <span className="font-heading text-[16.5px] font-medium">
                    {edu.degree}
                  </span>
                  <p className="mt-1 text-sm text-pf-muted">{edu.school}</p>
                  {edu.note ? (
                    <p className="mt-1.5 max-w-[55ch] text-sm leading-[1.6] text-pf-body">
                      {edu.note}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="certifications" className="pt-16 sm:pt-22">
          <SectionHeading label="Certifications" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((cert) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-2">
                    <Award size={16} className="text-white" />
                    {cert.url ? (
                      <ArrowUpRight
                        size={13}
                        className="text-white/70 transition-colors group-hover/cert:text-white"
                      />
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-medium leading-snug text-white">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-[12.5px] text-white/80">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </>
              );

              return cert.url ? (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <div key={cert.name} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
