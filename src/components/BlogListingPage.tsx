import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog/posts";

export function BlogListingPage() {
  return (
    <>
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#57e5b222,transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mx-auto flex max-w-[48rem] flex-col gap-[var(--size--xl)] text-center">
            <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
              Let&apos;s Advertising Blog
            </div>
            <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Insights on Digital Marketing &amp; AI Search
            </h1>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Expert guides on SEO, Answer Engine Optimization, content marketing, and the
              future of search.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-1 gap-[var(--size--xl)] md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-[var(--size--l)] rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)] no-underline transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-[var(--size--s)]">
                  <span className="rounded-[99999px] bg-[var(--brand--brand-sky)] px-[var(--size--m)] py-[var(--size--xs)] text-[length:var(--typography--text-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--brand--brand-electric-blue)]">
                    {post.category}
                  </span>
                  <span className="text-[length:var(--typography--text-s)] text-[var(--neutral--neutral-500)]">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-black group-hover:text-[var(--brand--brand-electric-blue)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {post.description}
                </p>
                <div className="mt-auto text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-electric-blue)]">
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
