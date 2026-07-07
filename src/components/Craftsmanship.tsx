import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage, { projectImages } from "./ProjectImage";

export default function Craftsmanship() {
  return (
    <section
      className="relative bg-warm-white section-padding"
      aria-label="Craftsmanship"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <AnimateOnScroll direction="left">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
              <ProjectImage
                src={projectImages.galleryTerrace}
                alt="Terraced concrete steps with natural stone retaining walls"
                className="absolute inset-0 h-full w-full"
                objectPosition="center 42%"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={120}>
            <div className="lg:pl-4 xl:pl-12">
              <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
                Craftsmanship
              </p>
              <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,4rem)] text-black">
                Craftsmanship
              </h2>
              <div className="mt-12 space-y-8 sm:mt-16">
                <p className="max-w-md text-base font-light leading-[2] text-[color-mix(in_srgb,var(--color-muted-dark)_72%,var(--color-black))] sm:text-[17px]">
                  We believe concrete deserves the same attention as timber,
                  stone and steel.
                </p>
                <p className="max-w-md text-base font-light leading-[2] text-muted-dark sm:text-[17px]">
                  Every formwork detail, every edge, every finish and every
                  junction is carefully considered long before concrete is
                  poured.
                </p>
                <p className="max-w-md text-base font-light leading-[2] text-muted-dark sm:text-[17px]">
                  Each project receives our complete attention.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
