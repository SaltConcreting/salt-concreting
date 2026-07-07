import type { Metadata } from "next";
import type { ProjectDetail } from "@/types/project";

export const SITE_NAME = "SALT Concreting & Carpentry";

export const DEFAULT_TITLE =
  "SALT Concreting & Carpentry | Architectural Concrete · Sydney";

export const DEFAULT_DESCRIPTION =
  "Architectural concreting and carpentry across Sydney. Bespoke benchtops, stairs, seating and outdoor concrete for residential and commercial projects. Craftsmanship without compromise.";

export function buildProjectTitle(project: ProjectDetail): string {
  const suburb = project.location.replace(", NSW", "");
  return `${project.title} · ${suburb} | ${SITE_NAME}`;
}

export function buildProjectDescription(project: ProjectDetail): string {
  if (project.metaDescription) {
    return project.metaDescription;
  }

  return project.introduction.paragraphs[0];
}

/** Default social share image — primary hero and featured-project photography. */
export const DEFAULT_OG_IMAGE = {
  url: "/images/projects/IMG_5719.jpeg",
  width: 5282,
  height: 4284,
  alt: "Outdoor kitchen with architectural concrete benchtop",
} as const;

type ShareImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export function getProjectShareImage(project: ProjectDetail): ShareImage {
  if (project.heroImage) {
    return { url: project.heroImage, alt: project.heroAlt };
  }

  if (project.heroVideo) {
    return { url: project.heroVideo.poster, alt: project.heroAlt };
  }

  return {
    url: project.closingImage,
    alt: project.closingImageAlt,
  };
}

export function buildOpenGraph({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: ShareImage;
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: "en_AU",
    url: path,
    siteName: SITE_NAME,
    title,
    description,
    images: [image],
  };
}

export function buildTwitter({
  title,
  description,
  imageUrl = DEFAULT_OG_IMAGE.url,
}: {
  title: string;
  description: string;
  imageUrl?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  };
}
