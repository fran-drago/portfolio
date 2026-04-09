/**
 * ContactLink — Renders a link in the domain/bold-username pattern.
 */

interface ContactLinkProps {
  domain: string;
  username: string;
  href: string;
}

export function ContactLink({ domain, username, href }: ContactLinkProps) {
  const isMailto = href.startsWith("mailto");
  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className="link-underline inline-flex items-center type-body-base text-secondary-foreground transition-colors hover:text-foreground"
    >
      <span className="inline-flex items-baseline">
        <span>{domain}</span>
        <span className="type-body-base-medium text-foreground">{username}</span>
      </span>
    </a>
  );
}
