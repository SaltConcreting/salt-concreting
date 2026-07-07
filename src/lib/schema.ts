import type { ProjectDetail } from "@/types/project";
import {
  buildProjectDescription,
  buildProjectTitle,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  getProjectShareImage,
  SITE_NAME,
} from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site";

const BUSINESS_EMAIL = "saltconcretingandcarpentry@gmail.com";
const BUSINESS_TELEPHONE = "+61451744893";
const INSTAGRAM_URL = "https://www.instagram.com/salt.cnc";

const SERVICES = [
  {
    name: "Architectural Concrete",
    description: "Bespoke formed concrete for statement architecture.",
  },
  {
    name: "Decorative Concrete",
    description: "Coloured and textured surfaces with considered design.",
  },
  {
    name: "Exposed Aggregate",
    description: "Natural stone aggregates with precision finishing.",
  },
  {
    name: "Driveways",
    description: "Grand entranceways engineered for longevity.",
  },
  {
    name: "Pool Surrounds",
    description: "Seamless integration with luxury outdoor living.",
  },
  {
    name: "Stairs & Features",
    description: "Sculptural elements that define space with intent.",
  },
] as const;

const SERVICED_AREAS = [
  "Northern Beaches",
  "North Shore",
  "Eastern Suburbs",
  "Inner West",
  "Hills District",
  "Western Sydney",
  "Sutherland Shire",
  "Sydney CBD",
  "Greater Sydney",
] as const;

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

function websiteId(): string {
  return `${getSiteUrl()}/#website`;
}

function businessImageUrl(): string {
  return absoluteUrl(DEFAULT_OG_IMAGE.url);
}

export function buildSiteSchemaGraph(): Record<string, unknown> {
  const orgId = organizationId();
  const siteId = websiteId();
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "HomeAndConstructionBusiness", "ProfessionalService"],
        "@id": orgId,
        name: SITE_NAME,
        url: siteUrl,
        description: DEFAULT_DESCRIPTION,
        image: businessImageUrl(),
        logo: businessImageUrl(),
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_TELEPHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        areaServed: SERVICED_AREAS.map((area) => ({
          "@type": "Place",
          name: `${area}, Sydney`,
        })),
        sameAs: [INSTAGRAM_URL],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Concreting Services",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: { "@id": orgId },
              areaServed: {
                "@type": "City",
                name: "Sydney",
              },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: siteUrl,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-AU",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function buildProjectSchemaGraph(project: ProjectDetail): Record<string, unknown> {
  const orgId = organizationId();
  const pageUrl = absoluteUrl(`/projects/${project.slug}`);
  const shareImage = getProjectShareImage(project);
  const title = buildProjectTitle(project);
  const description = buildProjectDescription(project);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: getSiteUrl(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId() },
        about: { "@id": `${pageUrl}#project` },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#project`,
        headline: project.title,
        description,
        image: absoluteUrl(shareImage.url),
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        contentLocation: {
          "@type": "Place",
          name: project.location,
        },
        keywords: [project.projectType, ...project.overview.features].join(", "),
      },
    ],
  };
}
