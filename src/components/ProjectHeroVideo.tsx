type ProjectHeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
  objectPosition?: string;
};

export default function ProjectHeroVideo({
  src,
  poster,
  className = "",
  objectPosition = "center center",
}: ProjectHeroVideoProps) {
  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition }}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
