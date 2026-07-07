import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import {
  buildOpenGraph,
  buildProjectDescription,
  buildProjectTitle,
  buildTwitter,
  getProjectShareImage,
} from "@/lib/metadata";
import { buildProjectSchemaGraph } from "@/lib/schema";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | SALT Concreting & Carpentry",
      robots: { index: false, follow: true },
    };
  }

  const title = buildProjectTitle(project);
  const description = buildProjectDescription(project);
  const path = `/projects/${slug}`;
  const image = getProjectShareImage(project);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: buildOpenGraph({
      title,
      description,
      path,
      image,
    }),
    twitter: buildTwitter({
      title,
      description,
      imageUrl: image.url,
    }),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildProjectSchemaGraph(project)} />
      <Navbar />
      <main id="main-content" className="w-full min-w-0 max-w-full">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
