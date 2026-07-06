/**
 * Canonical site URL for metadata, sitemap, and robots.
 *
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.com.au).
 * Falls back to VERCEL_URL on Vercel deployments, then localhost in dev.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) {
    return configured;
  }

  const vercelUrl = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export function getSiteOrigin(): URL {
  return new URL(`${getSiteUrl()}/`);
}
