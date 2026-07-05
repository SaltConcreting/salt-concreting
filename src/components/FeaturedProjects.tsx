import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage, { projectImages } from "./ProjectImage";

const featuredProjects = [
  {
    title: "Avalon Residence",
    location: "Avalon",
    description:
      "Custom architectural concrete benchtop with an integrated BBQ, designed for seamless outdoor entertaining.",
    image: projectImages.outdoorKitchen,
    objectPosition: "42% center",
    alt: "Avalon residence — custom architectural concrete benchtop with integrated BBQ",
    slug: "avalon-residence",
  },
  {
    title: "Narrabeen Residence",
    location: "Narrabeen",
    description:
      "Curved architectural staircase carefully formed to weave naturally through the existing landscape.",
    image: projectImages.galleryStairs,
    objectPosition: "center 42%",
    alt: "Narrabeen residence — curved architectural concrete staircase",
    slug: "narrabeen-residence",
  },
  {
    title: "Zetland Courtyard",
    location: "Zetland",
    description:
      "Pair of sculptural architectural concrete seats designed to frame the spa and enhance the surrounding garden.",
    image: projectImages.concreteSeat,
    objectPosition: "48% 63%",
    alt: "Zetland courtyard — sculptural architectural concrete seats framing the spa",
    slug: "zetland-courtyard",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="relative bg-warm-white section-padding"
      aria-label="Selected Work"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
            Selected Work
          </h2>
        </AnimateOnScroll>

        <div className="mt-32 grid gap-10 sm:mt-40 sm:gap-12 lg:grid-cols-3 lg:gap-14">
          {featuredProjects.map((project, index) => {
            const card = (
              <article className="group relative cursor-pointer overflow-hidden rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 sm:rounded-3xl">
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <ProjectImage
                    src={project.image}
                    alt={project.alt}
                    className="absolute inset-0 h-full w-full"
                    objectPosition={project.objectPosition}
                    sizes="(max-width: 1024px) 100vw, 28rem"
                  />

                  <div className="absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 sm:p-10">
                    <h3 className="heading-card text-[clamp(1.5rem,3vw,2rem)] text-warm-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-warm-white/60">
                      {project.location}, NSW
                    </p>
                    <p className="mt-3 max-w-[28ch] text-sm font-light leading-[1.85] text-warm-white/80">
                      {project.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-warm-white transition-all duration-700 group-hover:gap-4">
                      Explore Project
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </article>
            );

            return (
              <AnimateOnScroll key={project.title} delay={index * 80}>
                {"slug" in project && project.slug ? (
                  <Link href={`/projects/${project.slug}`} className="block">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
