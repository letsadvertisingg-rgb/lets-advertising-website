export interface ServiceNavItem {
  label: string;
  description: string;
  href: string;
}

/** Header/footer service links — keep in sync with service page routes. */
export const SERVICE_NAV_ITEMS: ServiceNavItem[] = [
  {
    label: "Website Design & Development",
    description: "Professional, mobile-friendly websites that turn visitors into customers.",
    href: "/web-design",
  },
  {
    label: "SEO",
    description: "Improve your Google rankings and reach customers actively searching for you.",
    href: "/seo-services",
  },
  {
    label: "Answer Engine Optimization (AEO)",
    description: "Get recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity.",
    href: "/aeo-services",
  },
  {
    label: "Social Media Marketing",
    description: "Build a strong social presence and generate leads where your customers are.",
    href: "/social-media-marketing",
  },
  {
    label: "Google & Paid Advertising",
    description: "Reach customers instantly with carefully managed, high-return campaigns.",
    href: "/paid-advertising",
  },
  {
    label: "Content Marketing",
    description: "Valuable content that builds credibility and encourages customer action.",
    href: "/content-marketing",
  },
  {
    label: "Analytics & Tracking",
    description: "Monthly reports, lead tracking, and complete campaign transparency.",
    href: "/analytics-tracking",
  },
];
