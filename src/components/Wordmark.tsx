import { cn } from "@/lib/utils";

/** Text wordmark for Let's Advertising (no logo asset yet). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("whitespace-nowrap font-semibold tracking-[-0.02em]", className)}>
      Let&rsquo;s{" "}
      <span className="text-[var(--brand--brand-electric-blue)]">Advertising</span>
    </span>
  );
}
