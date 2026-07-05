"use client";

import { useEffect, useRef, useState } from "react";

type ProjectVideoProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
};

function getVideoType(src: string): string {
  if (src.endsWith(".mp4")) return "video/mp4";
  if (src.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

export default function ProjectVideo({
  src,
  poster,
  alt,
  className = "",
  objectPosition = "center center",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    videoRef.current.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="image-zoom h-full w-full object-cover"
        style={{ objectPosition }}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        preload={shouldLoad ? "auto" : "none"}
        aria-label={alt}
      >
        {shouldLoad && <source src={src} type={getVideoType(src)} />}
      </video>
    </div>
  );
}
