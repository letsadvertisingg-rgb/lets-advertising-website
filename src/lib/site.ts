const DEFAULT_SITE_URL = "https://www.letsadvertising.com";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}
