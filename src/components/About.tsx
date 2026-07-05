import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage from "./ProjectImage";
import QuoteButton from "./QuoteButton";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black section-padding"
      aria-label="About SALT"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          <AnimateOnScroll direction="left" className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
              <ProjectImage
                src="/images/projects/me.jpeg"
                alt="Craftsman finishing bespoke architectural concrete on site"
                className="absolute inset-0 h-full w-full"
                objectPosition="38% 58%"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150} className="lg:col-span-7">
            <div className="lg:pl-8 xl:pl-16">
              <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
                About SALT
              </p>
              <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,3.75rem)] text-warm-white">
                Architectural Concrete,
                <br />
                Crafted to Last
              </h2>
              <p className="mt-12 max-w-lg text-base font-light leading-[2] text-muted">
                SALT Concreting &amp; Carpentry creates bespoke architectural
                concrete for homes where craftsmanship matters. From sculptural
                seating and polished finishes to exposed aggregate driveways and
                custom outdoor spaces, every project is approached with
                precision and care.
              </p>
              <p className="mt-8 max-w-lg text-base font-light leading-[2] text-muted">
                We work closely with homeowners, architects and builders across
                Sydney, delivering concrete that is designed to complement the
                surrounding architecture and stand the test of time.
              </p>

              <div className="mt-16 grid grid-cols-2 gap-10 sm:gap-16">
                <div>
                  <p className="heading-section text-4xl text-warm-white sm:text-5xl">
                    10+
                  </p>
                  <p className="label-luxury mt-4 text-[9px] text-muted-dark">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="heading-section text-4xl text-warm-white sm:text-5xl">
                    100%
                  </p>
                  <p className="label-luxury mt-4 text-[9px] text-muted-dark">
                    Custom Built
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <QuoteButton variant="outline" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
