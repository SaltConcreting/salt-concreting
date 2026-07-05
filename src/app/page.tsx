import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import BuiltToLast from "@/components/BuiltToLast";
import ArchitecturalConcrete from "@/components/ArchitecturalConcrete";
import Craftsmanship from "@/components/Craftsmanship";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <BuiltToLast />
        <ArchitecturalConcrete />
        <Process />
        <Craftsmanship />
        <Projects />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
