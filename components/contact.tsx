import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/AungKaungMo" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/aung-kaung-moe-215795255/" },
];

export function Contact() {
  return (
    <Reveal className="mx-auto max-w-230 px-4 sm:px-8">
      <section id="contact" className="pt-20 sm:pt-26">
        <div className="relative overflow-hidden rounded-[14px] border border-pf-sky-line bg-pf-card p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-25 -top-35 h-75 w-95"
            style={{ background: "radial-gradient(closest-side, var(--pf-sky-tint), transparent)" }}
          />
          <h2 className="mb-3.5 text-[26px] font-medium tracking-tight sm:text-[32px]">Say hello.</h2>
          <p className="mb-7 max-w-[60ch] text-[15.5px] leading-[1.7] text-pf-body">
            If you’re building a SaaS product, exploring an AI idea, or think we’d work well together, I’d rather hear about it early than late. I read every message and usually reply within a day or two.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="mailto:moeungkaung91@gmail.com"
              className="inline-flex cursor-pointer items-center gap-2.25 rounded-lg text-white border border-pf-sky bg-pf-sky px-5 py-2.75 font-heading text-sm font-medium transition-[box-shadow,transform,filter] duration-200 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_6px_26px_var(--pf-sky-tint)]"
            >
              <Mail size={15} />
              Send an email
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5.5 border-t border-pf-line pt-6">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="inline-flex items-center gap-1.75 text-[13px] text-pf-muted transition-colors hover:text-pf-accent"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
