import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage, { projectImages } from "./ProjectImage";

const featuredProject = {
  title: "Footpath",
  category: "Architectural Concrete",
  description:
    "A clean, durable concrete footpath designed to provide seamless access while complementing the surrounding landscape.",
  image: projectImages.footpath,
  objectPosition: "center center",
  alt: "Concrete footpath with clean edges through a landscaped garden",
};

const pairedProjects = [
  {
    id: 2,
    title: "Driveway Extension",
    category: "Structural Concrete",
    description:
      "A carefully matched driveway extension designed to integrate seamlessly with the existing surface while maintaining durability and finish quality.",
    image: projectImages.driveway,
    objectPosition: "center center",
    aspect: "aspect-[4/5] lg:aspect-[3/4]",
    alt: "Exposed aggregate driveway extension blending with the existing surface",
  },
  {
    id: 3,
    title: "Retaining Wall",
    category: "Structural Concrete",
    description:
      "Engineered retaining walls combining structural integrity with clean architectural detailing for landscaped environments.",
    image: projectImages.wall,
    objectPosition: "center center",
    aspect: "aspect-[4/5] lg:aspect-[3/4]",
    alt: "Architectural concrete retaining wall with clean vertical faces",
  },
];

const galleryProjects = [
  {
    id: 4,
    title: "Coved Driveway",
    category: "Architectural Concrete",
    description:
      "Precision-formed driveway featuring smooth coved transitions that elevate both appearance and long-term performance.",
    image: projectImages.cove,
    objectPosition: "center center",
    alt: "Driveway with smooth coved transitions and exposed aggregate finish",
  },
  {
    id: 5,
    title: "Sauna Area",
    category: "Architectural Concrete",
    description:
      "Burnished concrete slab designed as the foundation for a bespoke outdoor sauna, delivering a clean architectural finish and durable performance.",
    image: projectImages.sauna,
    objectPosition: "center center",
    alt: "Burnished concrete slab forming the foundation for an outdoor sauna area",
  },
];

function ProjectOverlay({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12">
        <p className="label-luxury text-[9px] text-gold-light sm:text-[10px]">
          {category}
        </p>
        <h3 className="heading-card mt-3 text-[clamp(1.5rem,3.5vw,2.75rem)] text-warm-white">
          {title}
        </h3>
        <p className="mt-2 text-sm font-light text-muted-light">
          {description}
        </p>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black section-padding"
      aria-label="Featured projects"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
              Selected Work
            </p>
            <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,4rem)] text-warm-white">
              Featured projects
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-[1.9] text-muted">
            A curated portfolio across Sydney&apos;s suburbs.
          </p>
        </AnimateOnScroll>

        <div className="mt-20 space-y-6 sm:mt-28 sm:space-y-8 lg:space-y-10">
          {/* Featured — full-width cinematic */}
          <AnimateOnScroll>
            <article className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]">
                <ProjectImage
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  className="absolute inset-0 h-full w-full"
                  objectPosition={featuredProject.objectPosition}
                  sizes="(max-width: 1024px) 100vw, 90rem"
                />
                <ProjectOverlay
                  category={featuredProject.category}
                  title={featuredProject.title}
                  description={featuredProject.description}
                />
              </div>
            </article>
          </AnimateOnScroll>

          {/* Outdoor kitchen + architectural seat — editorial pair */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            {pairedProjects.map((project, index) => (
              <AnimateOnScroll key={project.id} delay={index * 80}>
                <article className="group relative h-full">
                  <div
                    className={`relative overflow-hidden ${project.aspect}`}
                  >
                    <ProjectImage
                      src={project.image}
                      alt={project.alt}
                      className="absolute inset-0 h-full w-full"
                      objectPosition={project.objectPosition}
                      sizes="(max-width: 1024px) 100vw, 45rem"
                    />
                    <ProjectOverlay
                      category={project.category}
                      title={project.title}
                      description={project.description}
                    />
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Gallery pair */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            {galleryProjects.map((project, index) => (
              <AnimateOnScroll key={project.id} delay={index * 80}>
                <article className="group relative">
                  <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                    <ProjectImage
                      src={project.image}
                      alt={project.alt}
                      className="absolute inset-0 h-full w-full"
                      objectPosition={project.objectPosition}
                      sizes="(max-width: 1024px) 100vw, 45rem"
                    />
                    <ProjectOverlay
                      category={project.category}
                      title={project.title}
                      description={project.description}
                    />
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
