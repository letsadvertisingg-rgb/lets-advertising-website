const BENEFITS = [
  "Increasing your online visibility",
  "Bringing more potential customers to your website",
  "Generating quality leads",
  "Improving your brand awareness",
  "Growing your sales and revenue",
  "Providing clear and transparent reporting",
];

function BenefitList() {
  return (
    <div className="marquee-css-list flex shrink-0 items-center justify-between gap-[3rem]">
      {BENEFITS.map((label, i) => (
        <div key={i} className="flex shrink-0 items-center gap-[0.75rem] whitespace-nowrap">
          <span className="text-[var(--system--success)] text-[1.25rem] font-semibold">✓</span>
          <span className="text-[length:var(--typography--text-l)] font-medium text-black">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="flex flex-col items-center pt-[var(--size--4xl)] pb-[var(--size--4xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="relative z-[1] flex flex-col items-start">
          <div className="flex w-full flex-col gap-[var(--size--4xl)] overflow-hidden">
            <p className="text-[length:var(--typography--h6)] font-semibold tracking-[-0.02em] leading-[140%]">
              Trusted by local businesses, startups, and established brands
            </p>
            <div className="marquee-wrapper relative w-full">
              <div className="marquee-left-overlay absolute inset-y-0 left-0 z-[1] w-[100px] bg-[linear-gradient(90deg,#fff,#0000)]" />
              <div className="flex w-full gap-[3rem] overflow-hidden">
                <BenefitList />
                <BenefitList />
                <BenefitList />
              </div>
              <div className="marquee-right-overlay absolute inset-y-0 right-0 w-[100px] bg-[linear-gradient(90deg,#0000,#fff)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
