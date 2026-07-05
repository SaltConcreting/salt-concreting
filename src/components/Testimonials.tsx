"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Jacob's work is that of a craftsman. He went above and beyond to complete our spiral stairs to a level of detail that is incredible. He takes pride in his work and is one of the best tradesmen I have worked with in a long time.",
    name: "Mark T",
    location: "North Narrabeen",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative bg-warm-white section-padding"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll>
          <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
            Testimonials
          </p>
        </AnimateOnScroll>

        <div className="mt-16 lg:mt-24">
          <AnimateOnScroll delay={100}>
            <blockquote className="max-w-4xl">
              <p className="heading-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.25] text-black">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-12 sm:mt-16">
                <p className="text-sm font-normal tracking-wide text-black">
                  {current.name}
                </p>
                <p className="mt-2 text-xs font-light text-muted-dark">
                  {current.location}, NSW
                </p>
              </footer>
            </blockquote>
          </AnimateOnScroll>

          <div className="mt-16 flex items-center gap-6 sm:mt-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`View testimonial ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => setActive(index)}
                className={`h-px transition-all duration-700 ${
                  active === index
                    ? "w-16 bg-gold"
                    : "w-8 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
            <span className="ml-auto font-body text-[11px] tracking-[0.2em] text-muted-dark">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
