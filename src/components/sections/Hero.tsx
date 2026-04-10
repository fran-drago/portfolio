"use client";

import Image from "next/image";
import { useContent } from "@/contexts/LanguageContext";
import { CyclingText } from "@/components/CyclingText";
import { Button } from "@/components/Button";

export function Hero() {
  const { heroStatement, bioParagraphs, contact } = useContent();

  return (
    <header className="flex flex-col gap-[var(--spacing-32)] px-[var(--spacing-24)] py-[var(--spacing-32)]">
      {/* Avatar */}
      <div className="relative h-16 w-16 overflow-hidden rounded-full animate-hero-reveal animate-hero-reveal-delay-1">
        <Image
          src="/profile.png"
          alt="Fran Drago"
          fill
          sizes="64px"
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* ScrambleText + Content */}
      <div className="flex flex-col gap-[var(--spacing-8)]">
        <p className="type-display-hero text-foreground animate-hero-reveal animate-hero-reveal-delay-2">
          {heroStatement.prefix}{" "}
          <CyclingText phrases={heroStatement.cycling} scramble />{" "}
          {heroStatement.middle}{" "}
          <span className="text-primary">{heroStatement.suffix}</span>
        </p>

        <div className="flex flex-col gap-[var(--spacing-28)]">
          <div className="flex flex-col gap-[var(--spacing-20)] type-body-base text-foreground animate-hero-reveal animate-hero-reveal-delay-3">
            {bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="self-start animate-hero-reveal animate-hero-reveal-delay-4">
            <Button label={contact.closingStatement[1]} href="#contacto" />
          </div>
        </div>
      </div>
    </header>
  );
}
