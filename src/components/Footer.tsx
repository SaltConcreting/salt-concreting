import Link from "next/link";
import { caseStudyLinks, footerNavLinks } from "@/lib/navigation";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start lg:gap-16">
          <Logo size="large" />

          <nav aria-label="Site navigation" className="flex flex-col gap-5">
            <p className="label-luxury text-[9px] text-muted-dark sm:text-[10px]">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-8 sm:items-end lg:gap-10">
            <nav aria-label="Case studies" className="flex flex-col gap-5 sm:items-end">
              <p className="label-luxury text-[9px] text-muted-dark sm:text-[10px]">
                Selected Work
              </p>
              <ul className="flex flex-col gap-3 sm:items-end">
                {caseStudyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-5 sm:items-end">
              <a
                href="https://www.instagram.com/salt.cnc?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
              >
                Instagram
              </a>
              <a
                href="mailto:saltconcretingandcarpentry@gmail.com"
                className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
              >
                saltconcretingandcarpentry@gmail.com
              </a>
              <p className="text-xs font-light tracking-wide text-muted">
                Sydney, Australia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.04] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-light text-muted-dark">
            &copy; {currentYear} SALT Concreting &amp; Carpentry
          </p>
          <p className="text-[11px] font-light text-muted-dark">
            Sydney, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
