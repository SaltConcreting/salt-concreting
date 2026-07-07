import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectDetail } from "@/types/project";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectImage from "./ProjectImage";

type MoreProjectsProps = {
  currentSlug: string;
};

function getProjectThumbnail(project: ProjectDetail) {
  return (
    project.heroImage ?? project.heroVideo?.poster ?? project.closingImage
  );
}

export default function MoreProjects({ currentSlug }: MoreProjectsProps) {
  const otherProjects = projects.filter(
    (project) => project.slug !== currentSlug,
  );

  if (otherProjects.length === 0) {
    return null;
  }

  return (
    <section
      className="relative bg-warm-white section-padding"
      aria-label="More work"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
            Selected Work
          </p>
          <h2 className="heading-section mt-10 text-[clamp(2.25rem,5vw,4rem)] text-black">
            More Work
          </h2>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-10 sm:mt-28 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          {otherProjects.map((project, index) => (
            <AnimateOnScroll key={project.slug} delay={index * 80}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <article className="relative cursor-pointer overflow-hidden rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 sm:rounded-3xl">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                    <ProjectImage
                      src={getProjectThumbnail(project)}
                      alt={project.heroAlt}
                      className="absolute inset-0 h-full w-full"
                      objectPosition={project.heroObjectPosition}
                      sizes="(max-width: 1024px) 100vw, 45rem"
                    />

                    <div className="absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 sm:p-10">
                      <h3 className="heading-card text-[clamp(1.5rem,3vw,2rem)] text-warm-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-light text-warm-white/60">
                        {project.location}
                      </p>
                      <p className="mt-3 text-sm font-light text-warm-white/80">
                        {project.projectType}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-warm-white transition-all duration-700 group-hover:gap-4">
                        Explore Project
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
