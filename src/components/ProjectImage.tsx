import Image from "next/image";
import { getImageMetadata } from "@/lib/image-metadata";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
};

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  objectPosition = "center center",
  mobileObjectPosition,
}: ProjectImageProps) {
  const usesAdaptivePosition = Boolean(mobileObjectPosition);
  const isPositioned = /\b(absolute|fixed|sticky)\b/.test(className);
  const metadata = getImageMetadata(src);
  const blurDataURL = metadata?.blurDataURL;

  return (
    <div
      className={`overflow-hidden ${isPositioned ? "" : "relative"} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={`image-zoom object-cover${usesAdaptivePosition ? " object-position-adaptive" : ""}`}
        style={
          usesAdaptivePosition
            ? ({
                "--object-position": objectPosition,
                "--mobile-object-position": mobileObjectPosition,
              } as React.CSSProperties)
            : { objectPosition }
        }
        quality={80}
      />
    </div>
  );
}

const base = "/images/projects";

export const projectImages = {
  hero: `${base}/RenderedImage2.jpeg`,
  featured: `${base}/IMG_1644.jpeg`,
  outdoorKitchen: `${base}/IMG_5719.jpeg`,
  concreteSeat: `${base}/Seat.jpeg`,
  galleryStairs: `${base}/IMG_1481.jpeg`,
  galleryTerrace: `${base}/IMG_1477.jpeg`,
  pathway: `${base}/pathway.jpeg`,
  footpath: `${base}/footpath.jpeg`,
  driveway: `${base}/driveway.jpeg`,
  wall: `${base}/wall.jpeg`,
  cove: `${base}/cove.jpeg`,
  sauna: `${base}/sauna.jpeg`,
} as const;

export type HeroSlide = {
  src: string;
  alt: string;
  objectPosition: string;
};

/** Full-screen hero framing — architectural concrete as the focal subject. */
export const heroSlides: HeroSlide[] = [
  {
    src: projectImages.hero,
    alt: "Luxury pool with floating architectural concrete seat",
    // Portrait crop: lower anchor centres pool surrounds, spa, and architectural concrete.
    objectPosition: "center 78%",
  },
  {
    src: projectImages.outdoorKitchen,
    alt: "Outdoor kitchen with architectural concrete benchtop",
    objectPosition: "42% center",
  },
  {
    src: projectImages.concreteSeat,
    alt: "Curved floating architectural concrete bench beside pool",
    // Lower anchor brings curved seat and pool edge into frame; upper wall recedes.
    objectPosition: "48% 63%",
  },
];
