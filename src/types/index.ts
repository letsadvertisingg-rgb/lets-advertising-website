export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavMenu {
  label: string;
  items: NavDropdownItem[];
}

export interface HeroTab {
  id: string;
  label: string;
  lottiePath: string;
}

export interface AccordionFeature {
  title: string;
  body: string;
  lottiePath: string;
  backgroundImage: string;
}

export interface StickyFeaturePanel {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  lottiePath: string;
  backgroundImage: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface PlatformSlide {
  tag: string;
  title: string;
  body: string;
  image: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightPost {
  image: string;
  category: string;
  tag: string;
  date: string;
  title: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export type CurrencyCode = "USD" | "GBP" | "EUR";
