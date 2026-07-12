"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/lib/navigation";
import Logo from "./Logo";
import QuoteButton from "./QuoteButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Project heroes (especially light ones) sit behind a transparent header.
  // Use the existing elevated chrome from the top so nav stays readable.
  const isProjectPage = pathname.startsWith("/projects/");
  const isElevated = isScrolled || isMobileMenuOpen || isProjectPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        isElevated
          ? "border-b border-white/[0.04] bg-black/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-6 sm:px-10 lg:px-16 lg:py-8"
      >
        <Link href="/" aria-label="SALT Concreting & Carpentry — Home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-10 xl:gap-14 lg:flex">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-body text-[10px] font-normal uppercase tracking-[0.22em] text-muted-light transition-colors duration-500 hover:text-warm-white"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <QuoteButton size="compact" />
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-warm-white transition-all duration-500 ${
              isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-warm-white transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-warm-white transition-all duration-500 ${
              isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-all duration-700 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-12">
          {mainNavLinks.map((link, index) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="heading-section text-3xl text-warm-white transition-colors duration-500 hover:text-gold-light sm:text-4xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-20">
          <QuoteButton size="large" />
        </div>
      </div>
    </header>
  );
}
