"use client";

import Link from "next/link";
import { useContent } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { notFound } = useContent();

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden">
      <main className="relative flex flex-1 flex-col items-center justify-center px-[var(--page-padding-x)]">
        <div className="flex w-full flex-col items-start justify-between gap-12 sm:flex-row sm:items-end" style={{ maxWidth: "var(--content-max)" }}>
          {/* Left — 404 + title */}
          <div className="flex flex-col gap-6">
            <span className="type-label-section uppercase text-muted-foreground">
              {notFound.code}
            </span>
            <h1 className="type-display-hero font-semibold text-foreground">
              {notFound.title}
            </h1>
            <p className="type-body-base max-w-[24rem] text-muted-foreground leading-relaxed">
              {notFound.description}
            </p>
            <Link
              href="/"
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
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              {notFound.backHome}
            </Link>
          </div>

          {/* Right — Ghost component card */}
          <div className="shrink-0">
            <div className="w-56 rounded-16 border border-border-default bg-background p-5">
              {/* Component header — Figma style */}
              <div className="mb-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-primary/20" />
                <span className="type-body-xs text-muted-foreground">Component</span>
              </div>
              {/* Missing property rows */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">name</span>
                  <span className="type-body-xs font-mono text-foreground/30">undefined</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">page</span>
                  <span className="type-body-xs font-mono text-foreground/30">null</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="type-body-xs text-muted-foreground">status</span>
                  <span className="type-body-xs font-mono text-primary/60">not found</span>
                </div>
              </div>
              {/* Divider */}
              <div className="my-3 h-px bg-border-subtle" />
              {/* Broken token reference */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded border border-dashed border-border-default" />
                <span className="type-body-xs text-muted-foreground/50 line-through">
                  Page.tsx
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
