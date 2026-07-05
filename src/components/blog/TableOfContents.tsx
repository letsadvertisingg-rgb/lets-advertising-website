"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setMobileOpen(false);
    }
  }

  const nav = (
    <nav ref={navRef} aria-label="Table of contents">
      <ul className="flex flex-col gap-[var(--size--xs)]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                data-toc-id={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "w-full cursor-pointer border-l-2 py-[0.375rem] pl-[var(--size--m)] text-left text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)] transition-colors",
                  isActive
                    ? "border-[var(--brand--brand-electric-blue)] font-semibold text-[var(--brand--brand-electric-blue)]"
                    : "border-transparent text-[var(--brand--brand-charcoal)] hover:border-[var(--neutral--neutral-400)] hover:text-black",
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <div className={cn("lg:relative lg:h-full", className)}>
      {/* Mobile collapsible TOC */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex w-full cursor-pointer items-center justify-between rounded-[var(--radius--radius-lg)] border border-[var(--border)] bg-white px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold"
          aria-expanded={mobileOpen}
        >
          Table of Contents
          <span className="text-[var(--brand--brand-electric-blue)]">{mobileOpen ? "−" : "+"}</span>
        </button>
        {mobileOpen && (
          <div className="mt-[var(--size--s)] rounded-[var(--radius--radius-lg)] border border-[var(--border)] bg-white p-[var(--size--l)]">
            {nav}
          </div>
        )}
      </div>

      {/* Desktop sticky sidebar — follows scroll down the page */}
      <aside className="hidden lg:block lg:h-full">
        <div className="sticky top-[6.5rem] max-h-[calc(100vh-7.5rem)] overflow-y-auto overscroll-contain">
          <p className="mb-[var(--size--m)] text-[length:var(--typography--label-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
            Table of Contents
          </p>
          {nav}
        </div>
      </aside>
    </div>
  );
}
