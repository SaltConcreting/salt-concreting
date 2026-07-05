import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "Understanding the vision, site and design intent.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Collaborating with builders, architects and homeowners to determine the best construction approach.",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Engineering, reinforcement, formwork and site preparation.",
  },
  {
    number: "04",
    title: "Build",
    description: [
      "Formwork. Reinforcement. Pour. Finish.",
      "Every stage is completed with precision, care and craftsmanship.",
    ],
  },
  {
    number: "05",
    title: "Enjoy",
    description:
      "Your finished concrete becomes a permanent architectural feature designed to last for decades.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-white section-padding"
      aria-label="Our Process"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
            Our Process
          </h2>
          <p className="mx-auto mt-12 max-w-[34rem] text-base font-light leading-[1.95] text-[color-mix(in_srgb,var(--color-muted-dark)_72%,var(--color-black))] sm:mt-16 sm:text-[17px]">
            Every project follows a considered architectural process—from
            understanding your vision through to the final architectural
            feature.
          </p>
        </AnimateOnScroll>

        <ol className="mx-auto mt-32 max-w-3xl list-none sm:mt-40 lg:mt-48 xl:max-w-[42rem]">
          {steps.map((step, index) => (
            <li key={step.number}>
              {index > 0 && (
                <div
                  className="h-px w-full bg-black/[0.06]"
                  aria-hidden="true"
                />
              )}

              <AnimateOnScroll
                direction="none"
                delay={index * 90}
                className="py-14 sm:py-16 lg:py-[4.5rem]"
              >
                <article className="grid gap-5 sm:grid-cols-[minmax(3.5rem,6.5rem)_1fr] sm:items-start sm:gap-x-12 lg:gap-x-16 xl:gap-x-20">
                  <span
                    className="heading-display block text-[clamp(3.25rem,11vw,6.5rem)] leading-[0.88] tracking-[-0.04em] text-[color-mix(in_srgb,var(--color-black)_11%,transparent)] tabular-nums select-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <div className="sm:pt-1 lg:pt-2">
                    <h3 className="heading-card text-[clamp(1.375rem,2.2vw,1.75rem)] text-black">
                      {step.title}
                    </h3>

                    {Array.isArray(step.description) ? (
                      <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                        {step.description.map((line, lineIndex) => (
                          <p
                            key={line}
                            className={`max-w-[38ch] text-[15px] font-light leading-[1.95] text-muted-dark sm:text-base ${
                              lineIndex === 0 ? "tracking-[0.01em]" : ""
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-5 max-w-[38ch] text-[15px] font-light leading-[1.95] text-muted-dark sm:mt-6 sm:text-base">
                        {step.description}
                      </p>
                    )}
                  </div>
                </article>
              </AnimateOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
