import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "Sydney", label: "Servicing All Sydney" },
  { value: "100%", label: "Custom Built" },
];

export default function BuiltToLast() {
  return (
    <section
      className="relative bg-white section-padding"
      aria-label="Built to Last"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
            Built to Last
          </h2>
          <p className="mt-12 text-base font-light leading-[2] text-[color-mix(in_srgb,var(--color-muted-dark)_72%,var(--color-black))] sm:mt-16 sm:text-[17px]">
            For over 11 years I&apos;ve specialised in creating architectural
            concrete that becomes part of the home—not just another construction
            material. Every project is individually formed, poured and finished
            with an obsession for detail.
          </p>
        </AnimateOnScroll>

        <div className="mt-32 grid gap-16 sm:mt-40 sm:grid-cols-3 sm:gap-12 lg:mt-48 lg:gap-16">
          {stats.map((stat, index) => (
            <AnimateOnScroll
              key={stat.label}
              delay={index * 80}
              className="text-center"
            >
              <p className="heading-section text-[clamp(2.5rem,5vw,3.75rem)] text-black">
                {stat.value}
              </p>
              <p className="label-luxury mt-5 text-[9px] text-muted-dark sm:text-[10px]">
                {stat.label}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
