"use client";

import { useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { RoiCheckIcon } from "@/components/icons";

export function ConsultationSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = () => {
    let hasError = false;
    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }
    if (!email.trim() || !email.includes("@")) {
      setEmailError(true);
      hasError = true;
    }
    if (hasError) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-row max-[991px]:flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative z-[1] flex w-full flex-row max-[991px]:flex-col items-center gap-[2rem] pl-[calc(50vw-40rem)] max-[991px]:pl-0">
        {/* Left */}
        <div className="flex max-w-[47%] flex-1 flex-col gap-y-[var(--size--6xl)] pt-[8rem] pb-[8rem] pr-[4.3125rem] max-[991px]:w-full max-[991px]:max-w-full max-[991px]:px-[var(--container--size-padding)] max-[991px]:pt-[5rem] max-[991px]:pb-[3rem]">
          <Wordmark className="text-white text-[3rem] max-[991px]:text-[2rem]" />
          <div className="flex max-w-[28rem] flex-col items-start gap-[var(--size--xl)]">
            <div className="font-semibold text-white text-[length:var(--typography--h4)] max-[991px]:text-[length:var(--typography--h4-tablet)] leading-[var(--typography--line-height-m)] tracking-[-0.02em]">
              Ready to grow?
            </div>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Whether you&rsquo;re looking to generate more leads, increase sales, improve your
              online presence, or build a stronger brand, we&rsquo;re here to help. Contact us today
              for a free consultation and discover how digital marketing can help your business
              reach its full potential.
            </p>
          </div>
        </div>

        {/* Right: consultation form card */}
        <div className="flex-1 py-[6rem] pl-[2rem] max-[991px]:w-full max-[991px]:py-[3rem] max-[991px]:px-[var(--container--size-padding)] max-[991px]:flex max-[991px]:justify-center">
          <div className="roi-card">
            <div className="roi-header">
              <span className="roi-heading">Free Consultation</span>
            </div>

            {sent ? (
              <div className="flex flex-1 flex-col items-start justify-center gap-[1rem] py-[2rem]">
                <RoiCheckIcon width={40} height={40} />
                <div className="text-[1.5rem] font-semibold text-black">
                  Thanks, {name.trim()}!
                </div>
                <p className="text-[15px] leading-[1.6] text-[#374151]">
                  We&rsquo;ve received your request. We&rsquo;ll get back to you shortly to schedule
                  your free consultation.
                </p>
              </div>
            ) : (
              <>
                <div className="roi-fields-wrapper">
                  <div className="field-wrap">
                    <div className="field-label">Your name</div>
                    <div className={`input-wrap${name ? " filled" : ""}${nameError ? " error" : ""}`}>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        value={name}
                        onFocus={() => setNameError(false)}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <span className={`field-error${nameError ? " visible" : ""}`}>
                      Please enter your name
                    </span>
                  </div>

                  <div className="field-wrap">
                    <div className="field-label">Your email</div>
                    <div className={`input-wrap${email ? " filled" : ""}${emailError ? " error" : ""}`}>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        value={email}
                        onFocus={() => setEmailError(false)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <span className={`field-error${emailError ? " visible" : ""}`}>
                      Please enter a valid email address
                    </span>
                  </div>

                  <div className="field-wrap">
                    <div className="field-label">What would you like to grow?</div>
                    <div className={`input-wrap${message ? " filled" : ""}`}>
                      <input
                        type="text"
                        placeholder="More leads, more sales, better visibility…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button className="calc-btn" onClick={submit} disabled={sending}>
                  {sending ? (
                    <>
                      Sending <div className="roi-spinner" />
                    </>
                  ) : (
                    "Get My Free Consultation"
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right-half background image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg-img-69e75d.webp"
          alt=""
          sizes="100vw"
          className="sticky top-0 ml-auto h-full w-full max-w-[50%] max-[991px]:max-w-full object-cover overflow-clip"
        />
      </div>
    </section>
  );
}
