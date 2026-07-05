const DEFAULT_SITE_URL = "https://www.letsadvertising.com";

export const BOOKING_URL = "https://cal.com/lets-advertising-6b25en/30min";

export const bookingLinkProps = {
  href: BOOKING_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}
