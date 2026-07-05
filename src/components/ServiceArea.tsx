"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import SydneyMap from "./SydneyMap";

const servicedAreas = [
  "Northern Beaches",
  "North Shore",
  "Eastern Suburbs",
  "Inner West",
  "Hills District",
  "Western Sydney",
  "Sutherland Shire",
  "Sydney CBD",
  "Greater Sydney",
];

function scrollToEnquiryForm() {
  document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
}

export default function ServiceArea() {
  return (
    <section
      className="relative border-t border-white/[0.06] bg-black pb-[clamp(5rem,14vw,10rem)] pt-[clamp(4rem,10vw,7rem)]"
      aria-label="Service Area"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <AnimateOnScroll direction="left">
            <div className="lg:py-4">
              <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
                Service Area
              </p>
              <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,3.75rem)] text-warm-white">
                Servicing Greater Sydney
              </h2>
              <p className="mt-10 max-w-lg text-sm font-light leading-[2] text-muted">
                SALT Concreting &amp; Carpentry delivers premium architectural
                concrete throughout Sydney. We work with homeowners, architects,
                builders and landscape designers to create timeless concrete
                features that are built to last.
              </p>

              <div className="mt-12">
                <p className="label-luxury text-[9px] text-muted-dark">
                  Areas serviced
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {servicedAreas.map((area) => (
                    <li key={area} className="flex items-center gap-4">
                      <span
                        className="h-px w-4 shrink-0 bg-gold/60"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light text-muted-light">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={scrollToEnquiryForm}
                className="mt-14 inline-flex items-center justify-center rounded-none border border-gold bg-gold px-12 py-[1.125rem] font-body text-[11px] font-normal uppercase tracking-[0.25em] text-black transition-all duration-500 hover:border-gold-light hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(196,163,90,0.15)]"
              >
                Request a Consultation
              </button>
            </div>
          </AnimateOnScroll>

          <SydneyMap />
        </div>
      </div>
    </section>
  );
}
