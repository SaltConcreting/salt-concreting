import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found | SALT Concreting & Carpentry",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex min-h-[60vh] flex-col items-center justify-center bg-black section-padding"
      >
        <p className="label-luxury text-[10px] text-gold sm:text-[11px]">404</p>
        <h1 className="heading-section mt-10 text-center text-[clamp(2rem,5vw,3.5rem)] text-warm-white">
          Page not found
        </h1>
        <p className="mt-8 max-w-md text-center text-sm font-light leading-[2] text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          <Link
            href="/"
            className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
          >
            Return home
          </Link>
          <Link
            href="/enquire"
            className="link-underline text-xs font-light tracking-wide text-muted transition-colors duration-500 hover:text-warm-white"
          >
            Enquire
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
