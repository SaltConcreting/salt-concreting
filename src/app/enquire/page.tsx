import type { Metadata } from "next";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Enquire | SALT Concreting & Carpentry",
  description:
    "Share your architectural concrete project with SALT. We respond within 1–2 business days with a tailored consultation.",
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
