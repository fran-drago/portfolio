/**
 * page.tsx — Portfolio composition.
 * Desktop: centered, max-width container, no border.
 * Responsive: full-width.
 */

import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";
import { Toggles } from "@/components/Toggles";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Tools } from "@/components/sections/Tools";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div
        className="fixed top-[var(--spacing-24)] right-[var(--spacing-24)]"
        style={{ zIndex: 40 }}
      >
        <Toggles />
      </div>
      <div className="py-[var(--spacing-24)]">
        <main className="mx-auto w-full max-w-[var(--content-max)] overflow-hidden">
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Tools />
          <Languages />
          <Contact />
          <Footer />
        </main>
      </div>
    </ScrollRevealProvider>
  );
}
