"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useContent } from "@/contexts/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const { error: errorContent } = useContent();

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden">
      <main className="relative flex flex-1 flex-col items-center justify-center px-[var(--page-padding-x)]">
        <div className="flex w-full flex-col items-start justify-between gap-12 sm:flex-row sm:items-end" style={{ maxWidth: "var(--content-max)" }}>
          {/* Left — Error + actions */}
          <div className="flex flex-col gap-6">
            <span className="type-label-section uppercase text-muted-foreground">
              {errorContent.code}
            </span>
            <h1 className="type-display-hero font-semibold text-foreground">
              {errorContent.title}
            </h1>
            <p className="type-body-base max-w-[24rem] text-muted-foreground leading-relaxed">
              {errorContent.description}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={reset}
                className="group inline-flex items-center gap-2 type-body-base-medium text-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:rotate-180"
                >
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 16h5v5" />
                </svg>
                {errorContent.tryAgain}
              </button>
              <Link
                href="/"
                className="type-body-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {errorContent.backHome}
              </Link>
            </div>
          </div>

          {/* Right — Error details card */}
          <div className="shrink-0">
            <div className="w-56 rounded-16 border border-border-default bg-background p-5">
              {/* Component header — Figma style */}
              <div className="mb-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-primary/20" />
                <span className="type-body-xs text-muted-foreground">Runtime</span>
              </div>
              {/* Error property rows */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">type</span>
                  <span className="type-body-xs font-mono text-foreground/30">Error</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">caught</span>
                  <span className="type-body-xs font-mono text-primary/60">true</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">stack</span>
                  <span className="type-body-xs font-mono text-foreground/30">hidden</span>
                </div>
              </div>
              {/* Divider */}
              <div className="my-3 h-px bg-border-subtle" />
              {/* Recovery hint */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded border border-border-default border-dashed" />
                <span className="type-body-xs text-muted-foreground/50">
                  recoverable
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
