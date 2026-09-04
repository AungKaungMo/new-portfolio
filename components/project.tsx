"use client";

import { useState } from "react";
import { ArrowUpRight, Lock, Plus } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type WorkItem = {
  title: string;
  year: string;
  summary: string;
  image?: string;
  placeholder: string;
  did: string[];
  stack: string;
  result: string;
  github?: string | null;
  live?: string | null;
  /** Shown in a tooltip when there's no live URL (e.g. internal project). */
  liveNote?: string;
};

const WORK: WorkItem[] = [
  {
    title: "Rezerv",
    year: "2025 — Present",
    summary:
      "Built production features for a B2B SaaS platform that helps fitness, wellness, and sports businesses manage bookings, memberships, payments, and customers.",
    placeholder: "Drop a screen from [Project One]",
    did: [
      "Shipped referral, payment, payroll, and reporting features across business and customer portals.",
      "Partnered with PMs and backend engineers in Scrum sprints to scope and ship features.",
      "Integrated APIs, managed application state, and built AI workflows using prompts and structured outputs.",
    ],
    stack: "TypeScript · Next.js · React · Recoil . Tailwind CSS · MUI · Stripe · AI Prompting · Claude",
    result: "Contributed to a platform used by 1,000+ studios across Southeast Asia.",
    image: "/assets/images/rezerv.png",
    live: "https://www.rezerv.co/",
  },
  {
    title: "Oway Travel",
    year: "2025",
    summary:
      "A travel platform for booking flights, buses, hotels, tours, and transportation across Myanmar and beyond.",
    placeholder: "Oway Travel booking flow and operations dashboard",
    did: [
      "Improved SPA discoverability through prerendered SEO and modernized legacy dashboard workflows.",
      "Built loyalty features and integrated AYA and KBZ payments across complex booking states.",
      "Led a junior developer and simplified state management by migrating complex Redux flows to Zustand.",
    ],
    stack: "React · Next.js . Redux · Zustand · SASS · Prerender.io . AWS",
    result: "Stronger SEO · smoother payment flows · more maintainable frontend architecture",
    image: "/assets/images/owaytravel.png",
    live: "https://www.owaytravel.com/",
  },
  {
    title: "Training Internal System",
    year: "2023 - 2024",
    summary:
      "An internal platform for managing employee training, class enrollment, attendance, reviews, and performance.",
    placeholder: "Training dashboard and employee performance screens",
    did: [
      "Built enrollment, attendance, review, and performance-calculation workflows.",
      "Reduced loading time to roughly one-third using Redis caching and direct Odoo API integration.",
      "Led two interns, gathered user requirements, and coordinated delivery with mobile developers and QA.",
    ],
    stack: "Vue · Laravel · MySQL . Redis · Docker · Rest API · Odoo API",
    result: "Faster internal workflows · loading time reduced to roughly one-third",
    image: "/assets/images/tis.png",
  },
  {
    title: "Meeting Management System",
    year: "2023 — 2024",
    summary:
      "An internal platform for room scheduling, real-time availability, meeting minutes, and monthly reporting.",
    image: "/assets/images/mom.png",
    placeholder: "Meeting dashboard and room availability screens",
    did: [
      "Built the full-stack system and integrated Odoo data for real-time room availability.",
      "Turned user requests into features while providing responsive support and consistently meeting delivery timelines.",
      "Deployed and maintained the system on private servers using Nginx and Apache.",
    ],
    stack: "Vue · Laravel · MySQL · Odoo API · Nginx · Apache",
    result:
      "Real-time room availability · automated reporting · privately deployed",
  },
  {
    title: "TeaTalk",
    year: "2023 — 2024",
    summary:
      "A local social platform for sharing content, connecting communities, and purchasing in-app credits.",
    image: "/assets/images/teatalk.jpg",
    placeholder: "TeaTalk social feed and payment screens",
    did: [
      "Led two junior developers, assigned work, set timelines, and delivered the project on schedule.",
      "Integrated Dinger payments and built the purchasing, balance, and transaction logic for the ICE credit system.",
      "Built with React, Node.js, and SQL, then deployed and managed production services using PM2 and Nginx.",
    ],
    stack: "Nuxt.js · Node.js · SQL · Dinger · PM2 · Nginx · Alibaba Cloud",
    result:
      "Delivered on schedule · led 2 developers · deployed to production",
    live: "http://teatalk.io/",
  },
];

const microHeading = "text-[10.5px] uppercase tracking-[0.12em] font-bold";

function WorkRow({ item }: { item: WorkItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group border-b border-pf-line">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full cursor-pointer py-6 text-left transition-colors"
      >
        <div className="flex items-baseline justify-between gap-5">
          <span className="font-heading text-[19px] font-medium tracking-[-0.02em] transition-colors group-hover:text-pf-sky sm:text-[22px]">
            {item.title}
          </span>
          <span className="flex flex-none items-center gap-3">
            <span className="text-xs [font-variant-numeric:tabular-nums]">{item.year}</span>
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full border border-pf-line text-pf-muted transition-colors group-hover:border-pf-sky group-hover:bg-pf-sky-tint group-hover:text-pf-sky"
            >
              <Plus
                size={13}
                className={cn("transition-transform duration-200", open && "rotate-45")}
              />
            </span>
          </span>
        </div>
        <p className="mt-2 max-w-[56ch] text-[14.5px] leading-[1.6] text-pf-body">
          {item.summary}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium tracking-wide text-pf-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {open ? "Click to close" : "Click to view details"}
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 items-start gap-7 pb-1.5 pt-5 sm:grid-cols-[260px_1fr]">
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt={item.title}
                className="h-42 w-full rounded-lg object-cover ring-1 ring-pf-line"
              />
            ) : (
              <div className="grid h-42 w-full place-items-center rounded-lg border border-dashed border-pf-line bg-pf-tint px-4 text-center text-[12px] text-pf-faint">
                {item.placeholder}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6.5 sm:grid-cols-2">
              <div>
                <h4 className={cn(microHeading, "mb-2")}>What I did</h4>
                <ul className="flex flex-col gap-1.75">
                  {item.did.map((point) => (
                    <li key={point} className="text-[13.5px] leading-[1.55] text-pf-body">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3.5">
                <div>
                  <h4 className={cn(microHeading, "mb-2")}>Stack</h4>
                  <p className="text-[13px] text-pf-sky-soft">{item.stack}</p>
                </div>
                <div>
                  <h4 className={cn(microHeading, "mb-2")}>Result</h4>
                  <p className="text-[13px] text-pf-body">{item.result}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[12.5px] text-pf-sky transition-colors hover:text-pf-sky-soft"
                    >
                    <GithubIcon size={13} />
                    GitHub
                  </a>
                  )}
                  {item.live ? (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[12.5px] text-pf-sky transition-colors hover:text-pf-sky-soft"
                    >
                      Live site <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span
                      tabIndex={0}
                      onClick={(event) => event.stopPropagation()}
                      className="group/live relative inline-flex cursor-help items-center gap-1.5 text-[12.5px] text-pf-faint outline-none"
                    >
                      Live site <Lock size={12} />
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-0 mb-2 w-max max-w-55 rounded-md border border-pf-line bg-pf-card px-2.5 py-1.5 text-[11px] leading-[1.45] text-pf-body opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-opacity duration-150 group-hover/live:opacity-100 group-focus/live:opacity-100"
                      >
                        {item.liveNote ?? "Internal project — the live link isn't publicly accessible."}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Project() {
  return (
    <Reveal className="mx-auto max-w-230 px-4 sm:px-8">
      <section id="work" className="pt-16 sm:pt-23">
        <SectionHeading label="Selected work" aside="Click a row to open" className="mb-1.5" />
        <div className="flex flex-col">
          {WORK.map((item) => (
            <WorkRow key={item.title} item={item} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
