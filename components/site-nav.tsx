import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <div className="sticky top-0 z-20 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex h-14 max-w-230 items-center justify-between gap-6 rounded-full border border-pf-line bg-pf-surface/78 px-5.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-[14px]">
        <a
          href="#top"
          className="font-heading text-sm font-medium tracking-[-0.01em] text-pf-text"
        >
          AKM<span className="text-pf-sky">.</span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-5.5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-[12.5px] tracking-[0.02em] text-pf-muted transition-colors hover:text-pf-text sm:inline"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}
