import type { Metadata } from "next";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceArea from "@/components/ServiceArea";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

const title = "Enquire | SALT Concreting & Carpentry";
const description =
  "Share your architectural concrete project with SALT. We respond within 1–2 business days with a tailored consultation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/enquire",
  },
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/enquire",
  }),
  twitter: buildTwitter({
    title,
    description,
  }),
};

export default function EnquirePage() {
  return (
    <>
      <Navbar />
      <main>
        <Enquire />
        <ServiceArea />
      </main>
      <Footer />
    </>
  );
}
