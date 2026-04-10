"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { FileDownloadIcon } from "@hugeicons/core-free-icons";

interface ButtonProps {
  label: string;
  icon?: boolean;
  href?: string;
  onClick?: () => void;
}

export function Button({ label, icon = false, href, onClick }: ButtonProps) {
  const className = "group inline-flex items-center p-[var(--spacing-10)] rounded-[var(--radius-md)] bg-primary text-base transition-[background-color,border-radius] duration-[125ms] ease-in hover:bg-primary-subtle hover:rounded-[var(--radius-2)] overflow-hidden";

  const content = (
    <>
      <span className="flex items-center justify-center px-[var(--spacing-4)] whitespace-nowrap type-body-sm-medium">
        {label}
      </span>
      {icon && (
        <span className="flex items-center shrink-0 p-[2px] w-5">
          <HugeiconsIcon icon={FileDownloadIcon} size={16} color="currentColor" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
