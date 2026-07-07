import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import MoreProjects from "./MoreProjects";
import ProjectHeroVideo from "./ProjectHeroVideo";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import type { ProjectDetail as ProjectDetailType } from "@/types/project";

type ProjectDetailProps = {
  project: ProjectDetailType;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const overviewRows = [
    { label: "Location", value: project.overview.location },
    { label: "Project", value: project.overview.project },
    {
      label: "Features",
      value: project.overview.features.join(" · "),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden">
        {project.heroVideo ? (
          <ProjectHeroVideo
            src={project.heroVideo.src}
            poster={project.heroVideo.poster}
            className="absolute inset-0"
            objectPosition={project.heroObjectPosition}
          />
        ) : (
          <ProjectImage
            src={project.heroImage!}
            alt={project.heroAlt}
            className="absolute inset-0 h-full w-full"
            objectPosition={project.heroObjectPosition}
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />

        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="mx-auto w-full max-w-[90rem] px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16 lg:pb-32">
            <h1 className="heading-display text-[clamp(2.5rem,7vw,5.5rem)] text-warm-white">
              {project.title}
            </h1>
            <p className="mt-6 text-sm font-light text-warm-white/70">
              {project.location}
            </p>
            <p className="mt-2 text-sm font-light text-warm-white/60">
              {project.projectType}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        className="relative bg-warm-white section-padding"
        aria-label="Project introduction"
      >
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
          <AnimateOnScroll className="mx-auto max-w-3xl">
            <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
              {project.introduction.heading}
            </h2>
            <div className="mt-12 space-y-8 sm:mt-16">
              {project.introduction.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[42ch] text-base font-light leading-[2] text-muted-dark sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Project Overview */}
      <section
        className="relative bg-white section-padding"
        aria-label="Project overview"
      >
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
          <AnimateOnScroll className="mx-auto max-w-3xl">
            <dl className="space-y-12 sm:space-y-14">
              {overviewRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-4 border-b border-black/[0.06] pb-12 sm:grid-cols-[minmax(8rem,12rem)_1fr] sm:gap-x-16 sm:pb-14"
                >
                  <dt className="label-luxury text-[9px] text-muted sm:text-[10px]">
                    {row.label}
                  </dt>
                  <dd className="heading-card text-[clamp(1.25rem,2.5vw,1.75rem)] text-black">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Overview image */}
      {project.overviewImage && (
        <section aria-label="Project overview image">
          <AnimateOnScroll direction="none">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] xl:min-h-[480px]">
              <ProjectImage
                src={project.overviewImage.src}
                alt={project.overviewImage.alt}
                className="h-full w-full"
                objectPosition={project.overviewImage.objectPosition}
                sizes="100vw"
              />
            </div>
          </AnimateOnScroll>
        </section>
      )}

      {/* Case study media */}
      {project.mediaSections && project.mediaSections.length > 0 && (
        <section
          className="relative bg-warm-white section-padding"
          aria-label="Project case study"
        >
          <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
            <ol className="list-none space-y-32 sm:space-y-40 lg:space-y-48">
              {project.mediaSections.map((item, index) => (
                <li key={item.src}>
                  <AnimateOnScroll delay={index * 80}>
                    <figure>
                      {item.fullWidth && item.type === "image" ? (
                        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] xl:min-h-[480px]">
                          <ProjectImage
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full"
                            objectPosition={item.objectPosition}
                            mobileObjectPosition={item.mobileObjectPosition}
                            sizes="100vw"
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          {item.type === "video" ? (
                            <ProjectVideo
                              src={item.src}
                              poster={item.poster}
                              alt={item.alt}
                              className="absolute inset-0 h-full w-full"
                              objectPosition={item.objectPosition}
                            />
                          ) : (
                            <ProjectImage
                              src={item.src}
                              alt={item.alt}
                              className="h-full w-full"
                              objectPosition={item.objectPosition}
                              mobileObjectPosition={item.mobileObjectPosition}
                              sizes="(max-width: 1024px) 100vw, 90rem"
                            />
                          )}
                        </div>
                      )}
                      <figcaption className="mt-8 max-w-[42ch] text-[15px] font-light leading-[1.95] text-muted-dark sm:mt-10 sm:text-base">
                        {item.caption}
                      </figcaption>
                    </figure>
                  </AnimateOnScroll>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Construction Process */}
      {!project.mediaSections && (
        <section
          className="relative bg-warm-white section-padding"
          aria-label="Construction process"
        >
          <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
            <AnimateOnScroll className="mx-auto max-w-2xl text-center">
              <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-black">
                Construction Process
              </h2>
            </AnimateOnScroll>

            <ol className="mt-32 list-none space-y-32 sm:mt-40 sm:space-y-40 lg:mt-48 lg:space-y-48">
              {project.process.map((step, index) => (
                <li key={step.number}>
                  <AnimateOnScroll delay={index * 80}>
                    <article>
                      <div className="grid gap-8 sm:grid-cols-[minmax(3.5rem,6.5rem)_1fr] sm:items-start sm:gap-x-12 lg:gap-x-16">
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
                          <p className="mt-5 max-w-[38ch] text-[15px] font-light leading-[1.95] text-muted-dark sm:mt-6 sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-12 aspect-[16/10] overflow-hidden sm:mt-16 lg:mt-20">
                        <ProjectImage
                          src={step.image}
                          alt={step.imageAlt}
                          className="absolute inset-0 h-full w-full"
                          objectPosition={step.objectPosition}
                          sizes="(max-width: 1024px) 100vw, 90rem"
                        />
                      </div>
                    </article>
                  </AnimateOnScroll>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Closing hero image */}
      {!project.mediaSections && (
        <section aria-label="Completed project">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] xl:min-h-[480px]">
            <ProjectImage
              src={project.closingImage}
              alt={project.closingImageAlt}
              className="h-full w-full"
              objectPosition={project.closingObjectPosition}
              sizes="100vw"
            />
            {project.closing && (
              <>
                <div className="absolute inset-0 bg-black/28" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />
                <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16 lg:pb-32">
                  <div className="mx-auto max-w-[90rem]">
                    <h2 className="heading-section text-[clamp(2.25rem,5vw,4rem)] text-warm-white">
                      {project.closing.heading}
                    </h2>
                    <p className="mt-6 max-w-lg text-base font-light leading-[2] text-warm-white/70 sm:mt-8">
                      {project.closing.subheading}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      <MoreProjects currentSlug={project.slug} />

      {/* Call to action */}
      <section
        className="relative bg-black section-padding"
        aria-label="Enquire about your project"
      >
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
          <AnimateOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section text-[clamp(2.25rem,5vw,3.75rem)] text-warm-white">
              {project.cta.heading}
            </h2>
            <p className="mx-auto mt-10 max-w-lg text-base font-light leading-[2] text-muted sm:mt-12">
              {project.cta.body}
            </p>
            <div className="mt-14 sm:mt-16">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center rounded-none border border-gold bg-gold px-12 py-[1.125rem] font-body text-[11px] font-normal uppercase tracking-[0.25em] text-black transition-all duration-500 hover:border-gold-light hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(196,163,90,0.15)]"
              >
                Enquire
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
