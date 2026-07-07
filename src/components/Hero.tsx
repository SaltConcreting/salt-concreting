"use client";

import { useEffect, useRef, useState } from "react";
import ProjectImage, { heroSlides } from "./ProjectImage";

const SLIDE_INTERVAL_MS = 7000;
const FADE_DURATION_MS = 1500;

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!bg) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      bg.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0) scale(1.02)`;
      if (content) {
        content.style.opacity = String(Math.max(0, 1 - scrollY / 500));
        content.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: index === activeSlide ? 1 : 0,
              transitionDuration: `${FADE_DURATION_MS}ms`,
            }}
            aria-hidden={index !== activeSlide}
          >
            <ProjectImage
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ""}
              className="h-[108%] w-full"
              objectPosition={slide.objectPosition}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col justify-end will-change-transform"
      >
        <div className="mx-auto w-full max-w-[90rem] px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16 lg:pb-32">
          <p className="label-luxury text-[10px] text-gold-light sm:text-[11px]">
            Sydney · Architectural Concrete
          </p>
          <h1 className="heading-display mt-8 max-w-[14ch] text-[clamp(2.5rem,7vw,5.5rem)] text-warm-white">
            Built to endure.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-px animate-pulse bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
