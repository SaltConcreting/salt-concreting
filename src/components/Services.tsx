import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Architectural Concrete",
    description: "Bespoke formed concrete for statement architecture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <rect x="6" y="28" width="36" height="14" stroke="currentColor" strokeWidth="1" />
        <path d="M12 28V16L24 8L36 16V28" stroke="currentColor" strokeWidth="1" />
        <line x1="24" y1="8" x2="24" y2="28" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Decorative Concrete",
    description: "Coloured and textured surfaces with considered design.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="1" />
        <path d="M8 24H40M24 8V40" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Exposed Aggregate",
    description: "Natural stone aggregates with precision finishing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="16" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="32" r="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="36" cy="30" r="2.5" stroke="currentColor" strokeWidth="1" />
        <rect x="6" y="38" width="36" height="4" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Driveways",
    description: "Grand entranceways engineered for longevity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <path d="M8 36L24 12L40 36" stroke="currentColor" strokeWidth="1" />
        <line x1="14" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="1" />
        <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Pool Surrounds",
    description: "Seamless integration with luxury outdoor living.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <ellipse cx="24" cy="28" rx="18" ry="10" stroke="currentColor" strokeWidth="1" />
        <path d="M6 28C10 24 16 22 24 22C32 22 38 24 42 28" stroke="currentColor" strokeWidth="1" />
        <line x1="24" y1="18" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Stairs & Features",
    description: "Sculptural elements that define space with intent.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <path d="M8 38H16V30H24V22H32V14H40" stroke="currentColor" strokeWidth="1" />
        <line x1="8" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-warm-white section-padding"
      aria-label="Services"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
            Expertise
          </p>
          <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,4rem)] text-black">
            Services
          </h2>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-px bg-black/5 sm:mt-28 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 60}>
              <article className="group flex h-full flex-col bg-warm-white p-10 transition-colors duration-700 hover:bg-warm-white-muted/30 sm:p-12 lg:p-14">
                <div className="text-gold transition-colors duration-700 group-hover:text-gold-dark">
                  {service.icon}
                </div>
                <h3 className="heading-card mt-10 text-2xl text-black sm:text-[1.65rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-[1.85] text-muted-dark">
                  {service.description}
                </p>
                <div className="mt-auto pt-10">
                  <span className="inline-block h-px w-0 bg-gold transition-all duration-700 group-hover:w-12" />
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
