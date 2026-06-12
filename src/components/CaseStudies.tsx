import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ParallaxImage } from "@/components/Parallax";

const KNOW_ITEMS = [
  "How many people visited your website",
  "Where your leads came from",
  "Which campaigns are working",
  "What return you're getting on your investment",
];

export function CaseStudies() {
  return (
    <section className="relative flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[991px]:pt-[var(--size--6xl)] max-[991px]:pb-[var(--size--6xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="relative z-[1] flex flex-col items-start max-[767px]:overflow-hidden">
          <div className="flex w-full flex-col gap-[var(--size--5xl)] max-[767px]:gap-[var(--size--4xl)]">
            <h2 className="font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Complete transparency
            </h2>

            <div className="grid min-h-[620px] max-h-[700px] grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_1fr] gap-[16px] max-[991px]:grid-cols-1 max-[991px]:grid-rows-none max-[991px]:min-h-0 max-[991px]:max-h-none">
              {/* Analytics story card — spans 2 rows */}
              <div className="row-span-2 max-[991px]:row-span-1 rounded-[var(--radius--radius-xl)] bg-[var(--neutral--neutral-grey-200)] p-[48px] max-[767px]:p-[32px]">
                <h3 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h4)] max-[991px]:text-[length:var(--typography--h4-tablet)] leading-[var(--typography--line-height-m)] tracking-[-0.02em]">
                  Every marketing decision should be backed by data.
                </h3>
                <div className="flex flex-col items-start">
                  <Link
                    href="#contact"
                    aria-label="Get Your Free Consultation"
                    className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
                  >
                    <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-black bg-transparent" />
                    <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                      <StaggerText text="Get Your Free Consultation" />
                    </span>
                  </Link>
                  <div className="mt-[var(--size--4xl)] mb-[var(--size--4xl)] flex flex-col gap-[0.75rem]">
                    <p className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)] font-semibold">
                      You&rsquo;ll always know:
                    </p>
                    {KNOW_ITEMS.map((item) => (
                      <div key={item} className="flex items-start gap-[0.75rem]">
                        <span className="text-[var(--system--success)] font-semibold">✓</span>
                        <span className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monthly reports */}
              <div className="rounded-[var(--radius--radius-xl)] bg-[var(--brand--brand-sky)] p-[32px]">
                <div className="relative z-[1] flex flex-col items-start justify-start gap-[12px]">
                  <div className="font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    Monthly reports
                  </div>
                  <div className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    Performance reports and website analytics, every month
                  </div>
                </div>
              </div>

              {/* Photo — spans 2 rows, last on mobile */}
              <div className="bento-box-right paralax row-span-2 max-[991px]:row-span-1 max-[991px]:order-last overflow-hidden rounded-[var(--radius--radius-xl)]">
                <ParallaxImage
                  src="/images/img-69e624.webp"
                  className="full-image h-full w-full object-cover"
                  strength={24}
                  sizes="100vw"
                />
              </div>

              {/* Lead tracking */}
              <div className="rounded-[var(--radius--radius-xl)] bg-[var(--brand--brand-electric-blue)] p-[32px]">
                <div className="relative z-[1] flex flex-col items-start justify-start gap-[12px]">
                  <div className="font-semibold text-white text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    Lead tracking
                  </div>
                  <div className="text-white text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                    Campaign performance insights and smarter business decisions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="h-px w-full bg-[#ececec]" />
      </div>
    </section>
  );
}
