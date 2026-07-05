import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage, { projectImages } from "./ProjectImage";

const heroService = {
  title: "Concrete Benchtops",
  label: "Signature Offering",
  description:
    "Custom indoor and outdoor concrete benchtops designed to become the centrepiece of your home.",
  image: projectImages.outdoorKitchen,
  objectPosition: "42% center",
  alt: "Outdoor kitchen with architectural concrete benchtop",
  imageFirst: true,
};

const gridServices = [
  {
    title: "Concrete Seating",
    description:
      "Custom architectural concrete seating designed to blend seamlessly into gardens, pool areas and outdoor entertaining spaces.",
    image: projectImages.concreteSeat,
    objectPosition: "48% 63%",
    alt: "Curved floating architectural concrete bench beside pool",
  },
  {
    title: "Concrete Stairs",
    description:
      "Feature staircases individually formed and finished with precision.",
    image: projectImages.galleryTerrace,
    objectPosition: "center 42%",
    alt: "Terraced concrete steps with natural stone retaining walls",
  },
  {
    title: "Outdoor Living",
    description:
      "Pool surrounds, BBQ areas, concrete seating and bespoke outdoor entertaining spaces.",
    image: projectImages.hero,
    objectPosition: "center 78%",
    alt: "Luxury pool with floating architectural concrete seat",
  },
  {
    title: "Structural Concrete",
    description:
      "Driveways, slabs, retaining walls, exposed aggregate and formwork.",
    image: "/images/projects/driveway.jpeg",
    objectPosition: "center center",
    alt: "Exposed aggregate concrete driveway",
  },
];

type GridService = (typeof gridServices)[number];

function HeroServiceCard({
  title,
  label,
  description,
  image,
  objectPosition,
  alt,
  imageFirst,
}: typeof heroService) {
  const imageBlock = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]">
      <ProjectImage
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full"
        objectPosition={objectPosition}
        sizes="(max-width: 1024px) 100vw, 55vw"
      />
      <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/5" />
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center p-10 sm:p-12 lg:p-16 xl:p-20">
      <p className="label-luxury text-[9px] text-gold sm:text-[10px]">
        {label}
      </p>
      <h3 className="heading-card mt-7 text-[clamp(1.75rem,3.5vw,2.75rem)] text-black">
        {title}
      </h3>
      <p className="mt-6 max-w-md text-base font-light leading-[1.9] text-muted-dark sm:text-[17px]">
        {description}
      </p>
      <div className="mt-10">
        <span className="inline-block h-px w-0 bg-gold transition-all duration-700 group-hover:w-16" />
      </div>
    </div>
  );

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/[0.04] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-black/[0.06] hover:shadow-[0_24px_48px_-12px_rgba(10,10,10,0.08)] sm:rounded-3xl">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {imageFirst ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            <div className="lg:order-2">{imageBlock}</div>
            <div className="lg:order-1">{contentBlock}</div>
          </>
        )}
      </div>
    </article>
  );
}

function ServiceGridCard({
  title,
  description,
  image,
  objectPosition,
  alt,
}: GridService) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.04] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-black/[0.08] hover:shadow-[0_16px_40px_-12px_rgba(10,10,10,0.06)] sm:rounded-3xl">
      {image ? (
        <div className="relative aspect-[5/4] shrink-0">
          <ProjectImage
            src={image}
            alt={alt ?? title}
            className="absolute inset-0 h-full w-full"
            objectPosition={objectPosition}
            sizes="(max-width: 640px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/5" />
        </div>
      ) : (
        <div className="flex aspect-[5/4] shrink-0 items-end border-b border-black/[0.04] px-10 pb-10 sm:px-12 sm:pb-12">
          <span className="inline-block h-px w-10 bg-gold/30 transition-all duration-700 group-hover:w-14 group-hover:bg-gold/50" />
        </div>
      )}
      <div className="flex min-h-[10.5rem] flex-1 flex-col p-10 sm:min-h-[11.5rem] sm:p-12">
        <h3 className="heading-card text-[clamp(1.375rem,2.5vw,1.65rem)] text-black">
          {title}
        </h3>
        <p className="mt-4 max-w-[36ch] text-[15px] font-light leading-[1.9] text-muted-dark sm:mt-5 sm:text-base">
          {description}
        </p>
        <div className="mt-auto pt-8 sm:pt-10">
          <span className="inline-block h-px w-0 bg-gold transition-all duration-700 group-hover:w-12" />
        </div>
      </div>
    </article>
  );
}

export default function ArchitecturalConcrete() {
  return (
    <section
      className="relative bg-warm-white section-padding"
      aria-label="Architectural Concrete"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
            Architectural Concrete
          </h2>
          <p className="mx-auto mt-12 max-w-[34rem] text-base font-light leading-[1.95] text-[color-mix(in_srgb,var(--color-muted-dark)_72%,var(--color-black))] sm:mt-16 sm:text-[17px]">
            Architectural concrete crafted to become part of your home—not just
            another construction material.
          </p>
        </AnimateOnScroll>

        <div className="mt-32 space-y-14 sm:mt-40 sm:space-y-16 lg:mt-48 lg:space-y-20">
          <AnimateOnScroll>
            <HeroServiceCard {...heroService} />
          </AnimateOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {gridServices.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                delay={(index + 1) * 80}
                className="h-full"
              >
                <ServiceGridCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
