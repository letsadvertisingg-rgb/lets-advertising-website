import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import type { InsightPost } from "@/types";

const POSTS: InsightPost[] = [
  {
    image: "/images/01.webp",
    category: "News",
    tag: "Industry",
    date: "February 27, 2023",
    title: "Best API for Payments",
    href: "/blog/best-api-for-payments",
  },
  {
    image: "/images/02.webp",
    category: "News",
    tag: "Industry",
    date: "December 14, 2022",
    title: "4 Payment Methods Most Widely Accepted in the US in 2026",
    href: "/blog/4-methods-of-payments-accepted-in-us",
  },
  {
    image: "/images/protection_02.webp",
    category: "News",
    tag: "Industry",
    date: "March 20, 2023",
    title: "The Best Fraud Management Solution for Global Commerce",
    href: "/blog/best-fraud-management-solution-for-global-commerce",
  },
];

function ViewAllButton() {
  return (
    <Link
      href="/blog"
      aria-label="View All Resources"
      className="btn-animate-chars relative inline-flex flex-none items-center justify-center gap-[0.5rem] cursor-pointer px-[var(--size--2xl)] py-[1rem] no-underline"
    >
      <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-black bg-transparent" />
      <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
        <StaggerText text="View All Resources" />
      </span>
    </Link>
  );
}

export function InsightsSection() {
  return (
    <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="flex flex-col items-start relative z-[1]">
          <div className="mb-[var(--size--5xl)] flex w-full items-end justify-between gap-[24px]">
            <h2 className="font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Latest insights
            </h2>
            <div className="max-[767px]:hidden">
              <ViewAllButton />
            </div>
          </div>

          <div className="grid w-full grid-cols-3 max-[991px]:grid-cols-1 gap-[16px]">
            {POSTS.map((post) => (
              <div key={post.href} className="collection-item">
                <div className="insights-post relative z-[2] flex w-full flex-col gap-[var(--size--xl)]">
                  <div className="insights-image-wrapper relative w-full overflow-clip rounded-[var(--radius--radius-xl)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      sizes="100vw"
                      className="insights-image aspect-[410/260] h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[var(--size--xs)]">
                    <div
                      className="flex items-center justify-start gap-[8px] font-medium"
                      style={{ fontVariationSettings: '"wght" 440' }}
                    >
                      <div className="text-[length:var(--typography--text-s)] text-[var(--brand--brand-electric-blue)]">
                        {post.category}
                      </div>
                      <div className="h-[3px] w-[3px] rounded-[100px] bg-[#282c39]" />
                      <div className="text-[length:var(--typography--text-s)] text-black">{post.tag}</div>
                      <div className="h-[3px] w-[3px] rounded-[100px] bg-[#282c39]" />
                      <div className="text-[length:var(--typography--text-s)] text-black">{post.date}</div>
                    </div>
                    <h3 className="font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height)] tracking-[-0.02em]">
                      {post.title}
                    </h3>
                  </div>
                  <Link href={post.href} className="absolute inset-0 z-[1]" aria-label={post.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden max-[767px]:flex w-full justify-center mt-[var(--size--3xl)]">
            <ViewAllButton />
          </div>
        </div>
      </div>
    </section>
  );
}
