import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experiences } from "@/components/experiences";
import { Home } from "@/components/home";
import { Project } from "@/components/project";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function AppPage() {
  return (
    <>
      <SiteBackground />
      <SiteNav />
      <main className="relative z-10 pb-24 sm:pb-28">
        <Home />
        <Project />
        <Skills />
        <About />
        <Experiences />
        <Education />
        <Contact />
        <SiteFooter />
      </main>
    </>
  );
}
