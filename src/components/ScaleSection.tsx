import { ParallaxImage } from "@/components/Parallax";

export function ScaleSection() {
  return (
    <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[991px]:pt-[var(--size--6xl)] max-[991px]:pb-[var(--size--6xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="relative z-[1] flex w-full flex-col items-start gap-[var(--size--5xl)]">
          <h2
            className="max-w-[16ch] font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]"
            style={{ fontVariationSettings: '"wght" 580' }}
          >
            Simple strategies. Measurable results.
          </h2>

          <div className="grid w-full grid-cols-2 max-[991px]:grid-cols-1 gap-[var(--size--xl)]">
            {/* Left: photo card */}
            <div className="relative flex aspect-[628/628] flex-col overflow-hidden rounded-[var(--radius--radius-xxl)] p-[48px]">
              <ParallaxImage
                src="/images/img-69e0fb.webp"
                className="bg-image-big custom absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                sizes="100vw"
              />
              <div className="relative z-[1] flex flex-col items-start justify-start gap-[12px]">
                <div className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  More Visibility
                </div>
                <div className="text-white text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                  we put your business in front of the right audience
                </div>
              </div>
            </div>

            {/* Right: 2x2 inner grid */}
            <div className="grid grid-cols-2 grid-rows-[1fr_1fr] max-[767px]:grid-cols-1 max-[767px]:grid-rows-none gap-[var(--size--xl)]">
              <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[32px]">
                <div className="relative z-[1] flex flex-col items-start gap-[12px]">
                  <div className="font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    More Traffic
                  </div>
                  <div className="text-black text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                    bringing more potential customers to your website
                  </div>
                </div>
              </div>

              <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--brand--brand-electric-blue)] p-[32px]">
                <div className="relative z-[1] flex flex-col items-start gap-[12px]">
                  <div className="font-semibold text-white text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    More Leads
                  </div>
                  <div className="text-white text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                    quality leads that turn into paying customers
                  </div>
                </div>
              </div>

              {/* Bottom: spans both columns */}
              <div className="relative col-span-2 max-[767px]:col-span-1 overflow-hidden rounded-[var(--radius--radius-xxl)] bg-[var(--brand--brand-sky)] p-[32px] max-[991px]:min-h-[350px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/vector-(50).svg"
                  alt=""
                  className="absolute bottom-0 left-0 right-0 w-full"
                />
                <div className="relative z-[1] flex flex-col items-start gap-[12px]">
                  <div className="font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    More Sales & Revenue
                  </div>
                  <div className="text-black text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                    with clear and transparent reporting on every campaign
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
