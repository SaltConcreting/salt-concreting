import type { Metadata } from "next";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServiceArea from "@/components/ServiceArea";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";
import { buildEnquireSchemaGraph } from "@/lib/schema";

const title = "Enquire | SALT Concreting & Carpentry";
const description =
  "Discuss your architectural concrete project with SALT. Servicing Greater Sydney, we respond within 1–2 business days with a tailored consultation.";

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
      <JsonLd data={buildEnquireSchemaGraph(description)} />
      <Navbar />
      <main id="main-content">
        <Enquire />
        <ServiceArea />
      </main>
      <Footer />
    </>
  );
}
