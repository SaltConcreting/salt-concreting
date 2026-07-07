export type ProjectProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export type ProjectHeroVideo = {
  src: string;
  poster: string;
};

export type ProjectMediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  fullWidth?: boolean;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  location: string;
  projectType: string;
  /** Search-optimised description; visible intro copy remains in introduction. */
  metaDescription?: string;
  heroImage?: string;
  heroVideo?: ProjectHeroVideo;
  heroObjectPosition?: string;
  heroAlt: string;
  introduction: {
    heading: string;
    paragraphs: string[];
  };
  overview: {
    location: string;
    project: string;
    features: string[];
  };
  overviewImage?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  mediaSections?: ProjectMediaItem[];
  process: ProjectProcessStep[];
  closingImage: string;
  closingImageAlt: string;
  closingObjectPosition?: string;
  closing?: {
    heading: string;
    subheading: string;
  };
  cta: {
    heading: string;
    body: string;
  };
};
