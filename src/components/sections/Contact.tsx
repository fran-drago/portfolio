"use client";

import { useContent } from "@/contexts/LanguageContext";
import { ContactLink } from "@/components/ContactLink";
import { Button } from "@/components/Button";

export function Contact() {
  const { contact, location, sections } = useContent();

  return (
    <section
      aria-labelledby="contact-heading"
      id="contacto"
      className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]"
    >
      <h2
        id="contact-heading"
        className="type-label-section text-secondary-foreground mb-4"
        data-reveal
      >
        {sections.contact}
      </h2>

      {/* CTA */}
      <div className="mb-[var(--spacing-32)] flex flex-col gap-[var(--spacing-4)]" data-reveal>
        <p className="type-heading-md text-foreground">{contact.closingStatement[0]}</p>
        <p className="type-heading-md text-primary">{contact.closingStatement[1]}</p>
      </div>

      {/* Contact links */}
      <address className="not-italic space-y-[var(--spacing-14)]" data-reveal>
        {contact.channels.map((channel) => (
          <div key={channel.href}>
            <ContactLink
              domain={channel.domain}
              username={channel.username}
              href={channel.href}
            />
          </div>
        ))}
      </address>

      <div className="mt-[var(--spacing-32)]" data-reveal>
        <Button label={contact.downloadCv} icon href={contact.cv.href} />
      </div>

      <p className="type-body-base text-secondary-foreground mt-[var(--spacing-32)]" data-reveal>
        {location}
      </p>
    </section>
  );
}
