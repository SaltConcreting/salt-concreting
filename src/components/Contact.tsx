"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import QuoteButton from "./QuoteButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[60vh] items-center justify-center bg-black section-padding"
      aria-label="Begin your project"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll
          direction="none"
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="heading-section text-[clamp(2.5rem,6vw,4.5rem)] text-warm-white">
            Let&apos;s begin your project
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-[2] text-muted sm:mt-12 sm:text-base">
            Ready to create something exceptional? We&apos;d love to hear about
            your project.
          </p>
          <div className="mt-14 sm:mt-16">
            <QuoteButton size="large" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
