import Link from "next/link";
import { cn } from "@/lib/utils";

interface StaggerTextProps {
  text: string;
}

/**
 * Per-character span split with incremental transition delays —
 * replicates pay.com's initButtonCharacterStagger (0.01s per char).
 * Hover animation lives in globals.css (.btn-animate-chars).
 */
export function StaggerText({ text }: StaggerTextProps) {
  return (
    <span data-button-animate-chars="">
      {[...text].map((char, i) => (
        <span
          key={i}
          style={{
            transitionDelay: `${i * 0.01}s`,
            ...(char === " " ? { whiteSpace: "pre" } : {}),
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

interface StaggerButtonProps {
  href: string;
  text: string;
  className?: string;
  bgClassName?: string;
  textClassName?: string;
}

/**
 * pay.com button: rounded pill with a background layer that insets on hover
 * and per-char text roll. Variants are styled by the caller via classNames.
 */
export function StaggerButton({
  href,
  text,
  className,
  bgClassName,
  textClassName,
}: StaggerButtonProps) {
  return (
    <Link
      href={href}
      aria-label={text}
      className={cn(
        "btn-animate-chars relative inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className={cn("btn-animate-chars__bg absolute", bgClassName)} />
      <span className={cn("relative z-[1]", textClassName)}>
        <StaggerText text={text} />
      </span>
    </Link>
  );
}
