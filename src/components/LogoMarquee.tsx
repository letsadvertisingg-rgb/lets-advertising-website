const LOGOS = [
  "/images/logo-6a16b6.svg",
  "/images/logo-(1).svg",
  "/images/logo-(2).svg",
  "/images/logo-(3).svg",
  "/images/logo-(4).svg",
  "/images/paysafe.svg",
  "/images/capital.svg",
  "/images/express.svg",
];

function LogoList() {
  return (
    <div className="marquee-css-list flex shrink-0 items-end justify-between gap-[3rem]">
      {LOGOS.map((src, i) => (
        <div
          key={i}
          className={`flex min-w-[10rem] max-w-[10rem] min-h-[2.5rem] max-h-[2.5rem] items-center justify-center${
            i === LOGOS.length - 1 ? " ml-[1rem]" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="marque-css-item-logo box-border h-full w-full min-w-[10rem] max-w-[10rem] max-h-[2.5rem] object-cover overflow-visible"
          />
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
              Trusted by industry leaders in 32+ countries
            </p>
            <div className="marquee-wrapper relative w-full">
              <div className="marquee-left-overlay absolute inset-y-0 left-0 z-[1] w-[100px] bg-[linear-gradient(90deg,#fff,#0000)]" />
              <div className="flex w-full gap-[3rem] overflow-hidden">
                <LogoList />
                <LogoList />
                <LogoList />
              </div>
              <div className="marquee-right-overlay absolute inset-y-0 right-0 w-[100px] bg-[linear-gradient(90deg,#0000,#fff)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
