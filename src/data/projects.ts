import type { ProjectDetail } from "@/types/project";

const avalonBase = "/images/projects/avalon";
const narrabeenBase = "/images/projects/narrabeen";
const zetlandBase = "/images/projects/zetland";

export const projects: ProjectDetail[] = [
  {
    slug: "avalon-residence",
    title: "Avalon Residence",
    location: "Avalon, NSW",
    projectType: "Architectural Concrete Benchtop",
    heroImage: `${avalonBase}/hero.jpeg`,
    heroObjectPosition: "center center",
    heroAlt:
      "Avalon residence — completed architectural concrete benchtop with integrated BBQ",
    introduction: {
      heading: "Designed for Outdoor Living",
      paragraphs: [
        "Designed as the centrepiece of an outdoor entertaining area, this architectural concrete benchtop was created to integrate seamlessly with a built-in BBQ while complementing the home's coastal architecture.",
        "Every edge, junction and finish was carefully considered long before the concrete was poured, resulting in a permanent feature designed to age beautifully.",
      ],
    },
    overview: {
      location: "Avalon, NSW",
      project: "Architectural Concrete Benchtop",
      features: ["Integrated BBQ", "Custom Formwork", "Architectural Finish"],
    },
    process: [
      {
        number: "01",
        title: "Formwork",
        description:
          "Precision begins before concrete is ever poured. Every dimension, edge and junction is carefully planned to create clean architectural lines.",
        image: `${avalonBase}/formwork.jpeg`,
        imageAlt: "Custom formwork for architectural concrete benchtop at Avalon",
        objectPosition: "center center",
      },
      {
        number: "02",
        title: "Pour",
        description:
          "Concrete is placed carefully to preserve every detail established during the formwork stage while ensuring strength and consistency throughout.",
        image: `${avalonBase}/pour.jpeg`,
        imageAlt: "Concrete pour for architectural benchtop at Avalon",
        objectPosition: "center center",
      },
      {
        number: "03",
        title: "Finishing",
        description:
          "Every surface is refined by hand to achieve a smooth architectural finish ready for years of everyday use.",
        image: `${avalonBase}/trowelling.jpeg`,
        imageAlt: "Hand finishing architectural concrete benchtop at Avalon",
        objectPosition: "center center",
      },
      {
        number: "04",
        title: "Completed",
        description:
          "The finished benchtop becomes a permanent architectural feature, combining durability with understated design.",
        image: `${avalonBase}/hero.jpeg`,
        imageAlt:
          "Completed architectural concrete benchtop with integrated BBQ at Avalon",
        objectPosition: "center center",
      },
    ],
    closingImage: `${avalonBase}/hero.jpeg`,
    closingImageAlt:
      "Completed architectural concrete benchtop at Avalon residence",
    closingObjectPosition: "center center",
    cta: {
      heading: "Planning an Architectural Concrete Project?",
      body: "Whether you're building an outdoor kitchen, feature staircase, seating or another bespoke concrete element, we'd love to discuss your vision.",
    },
  },
  {
    slug: "narrabeen-residence",
    title: "Narrabeen Residence",
    location: "Narrabeen, NSW",
    projectType: "Architectural Concrete Staircase",
    heroImage: `${narrabeenBase}/finish.jpeg`,
    heroObjectPosition: "62% 44%",
    heroAlt:
      "Narrabeen residence — completed architectural concrete staircase, front elevation",
    introduction: {
      heading: "Designed for the Landscape",
      paragraphs: [
        "A sculptural architectural staircase designed to replace an ageing brick stairway while preserving the site's established sandstone walls and mature garden. Every step was individually formed to weave naturally through the existing landscape rather than compete with it.",
      ],
    },
    overview: {
      location: "Narrabeen, NSW",
      project: "Architectural Concrete Staircase",
      features: [
        "Preserved Sandstone Walls",
        "Custom Formwork",
        "Architectural Finish",
      ],
    },
    process: [
      {
        number: "01",
        title: "Existing",
        description:
          "The original brick stairway had reached the end of its life. The challenge was to replace it while protecting the surrounding sandstone walls, mature planting and established landscape.",
        image: `${narrabeenBase}/existing.jpeg`,
        imageAlt:
          "Existing brick stairway at Narrabeen residence before replacement",
        objectPosition: "center center",
      },
      {
        number: "02",
        title: "Formwork",
        description:
          "Every tread was individually formed and reinforced to follow the site's natural contours. Particular attention was given to preserving the surrounding rockwork while creating clean architectural lines.",
        image: `${narrabeenBase}/form.jpeg`,
        imageAlt: "Custom formwork for architectural concrete staircase at Narrabeen",
        objectPosition: "center center",
      },
      {
        number: "03",
        title: "Pour",
        description:
          "Each step was carefully placed and hand finished on site to achieve crisp edges, consistent texture and a durable architectural finish throughout the staircase.",
        image: `${narrabeenBase}/pour.jpeg`,
        imageAlt: "Concrete pour for architectural staircase at Narrabeen",
        objectPosition: "center center",
      },
      {
        number: "04",
        title: "Completed",
        description:
          "Once cured and stripped, the staircase settled naturally into the landscape, appearing as though it had always belonged within the garden.",
        image: `${narrabeenBase}/finish.jpeg`,
        imageAlt:
          "Completed architectural concrete staircase at Narrabeen residence",
        objectPosition: "center center",
      },
    ],
    closingImage: `${narrabeenBase}/done.jpeg`,
    closingImageAlt:
      "Architectural concrete staircase settled within the garden at Narrabeen",
    closingObjectPosition: "center center",
    closing: {
      heading: "Designed to belong.",
      subheading:
        "Architecture and landscape working together through carefully crafted concrete.",
    },
    cta: {
      heading: "Planning an Architectural Concrete Project?",
      body: "Whether you're building an outdoor kitchen, feature staircase, seating or another bespoke concrete element, we'd love to discuss your vision.",
    },
  },
  {
    slug: "zetland-courtyard",
    title: "Zetland Courtyard",
    location: "Zetland, NSW",
    projectType: "Architectural Concrete Seating",
    heroVideo: {
      src: `${zetlandBase}/hero.mp4`,
      poster: `${zetlandBase}/hero-poster.jpeg`,
    },
    heroObjectPosition: "48% 63%",
    heroAlt:
      "Zetland courtyard — sculptural architectural concrete seats framing the spa",
    introduction: {
      heading: "Designed to Frame the Space",
      paragraphs: [
        "A pair of sculptural architectural concrete seats designed to frame the spa and enhance the surrounding garden. Each seat was individually formed and finished to create a permanent feature that anchors the courtyard while complementing the home's contemporary architecture.",
        "Every curve, edge and surface was carefully considered long before the concrete was poured, resulting in seating that feels both sculptural and entirely at home within the landscape.",
      ],
    },
    overview: {
      location: "Zetland, NSW",
      project: "Architectural Concrete Seating",
      features: [
        "Sculptural Formwork",
        "Custom Curves",
        "Architectural Finish",
      ],
    },
    overviewImage: {
      src: `${zetlandBase}/top.jpeg`,
      alt: "Zetland courtyard — overall view of architectural concrete seating and spa",
      objectPosition: "center center",
    },
    mediaSections: [
      {
        type: "image",
        src: `${zetlandBase}/form%202.jpeg`,
        alt: "Complex curved formwork for architectural concrete seating at Zetland",
        caption:
          "Complex curved formwork established the geometry of the seating and spa surrounds.",
        objectPosition: "center center",
      },
      {
        type: "image",
        src: `${zetlandBase}/steel.jpeg`,
        alt: "Steel reinforcement detailing for curved architectural concrete at Zetland",
        caption:
          "Steel reinforcement was carefully detailed to maintain structural integrity through every curve.",
        objectPosition: "center center",
      },
      {
        type: "video",
        src: `${zetlandBase}/pour.mov`,
        alt: "Controlled concrete pour for architectural seating at Zetland",
        caption:
          "Concrete placement required a continuous controlled pour to preserve the clean architectural form.",
        objectPosition: "center center",
      },
      {
        type: "image",
        src: `${zetlandBase}/poured.jpeg`,
        alt: "Freshly poured architectural concrete seating and spa surrounds at Zetland",
        caption:
          "Freshly poured concrete settled into the curved forms before hand finishing began.",
        objectPosition: "center center",
        mobileObjectPosition: "55% 86%",
        fullWidth: true,
      },
      {
        type: "video",
        src: `${zetlandBase}/polish.mov`,
        alt: "Hand finishing architectural concrete surfaces at Zetland",
        caption:
          "Every surface was progressively refined by hand to achieve a smooth tactile finish.",
        objectPosition: "center center",
      },
      {
        type: "image",
        src: `${zetlandBase}/hero-poster.jpeg`,
        alt: "Both architectural concrete benches framing the spa in the Zetland courtyard",
        caption:
          "The completed architectural bench provides durable seating while remaining visually understated.",
        objectPosition: "center center",
      },
      {
        type: "video",
        src: `${zetlandBase}/spa.mov`,
        alt: "Completed architectural spa seating integrated into the Zetland courtyard",
        caption:
          "The finished spa seating integrates seamlessly into the courtyard landscape.",
        objectPosition: "48% 72%",
      },
      {
        type: "video",
        src: `${zetlandBase}/seat.mov`,
        alt: "Completed architectural concrete seat in the Zetland courtyard",
        caption:
          "The completed seat integrates seamlessly into the courtyard landscape.",
        objectPosition: "48% 63%",
      },
    ],
    process: [],
    closingImage: `${zetlandBase}/top.jpeg`,
    closingImageAlt:
      "Sculptural architectural concrete seats in the Zetland courtyard",
    closingObjectPosition: "48% 63%",
    cta: {
      heading: "Planning an Architectural Concrete Project?",
      body: "Whether you're building an outdoor kitchen, feature staircase, seating or another bespoke concrete element, we'd love to discuss your vision.",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
