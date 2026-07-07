export type NavLink = {
  label: string;
  href: string;
};

/** Homepage section anchors — prefixed with `/` so links work from any route. */
export const mainNavLinks: NavLink[] = [
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const footerNavLinks: NavLink[] = [
  ...mainNavLinks,
  { label: "Enquire", href: "/enquire" },
];

export const caseStudyLinks: NavLink[] = [
  { label: "Avalon Residence", href: "/projects/avalon-residence" },
  { label: "Narrabeen Residence", href: "/projects/narrabeen-residence" },
  { label: "Zetland Courtyard", href: "/projects/zetland-courtyard" },
];
