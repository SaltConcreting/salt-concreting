import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getCanonicalHost(): string | null {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!configured) return null;

  try {
    const url = configured.startsWith("http")
      ? configured
      : `https://${configured}`;
    return new URL(url).host;
  } catch {
    return null;
  }
}

/**
 * Redirect apex ↔ www variants to the canonical host in production.
 * Only applies when the request shares the same root domain as NEXT_PUBLIC_SITE_URL,
 * so preview deployments on *.vercel.app are unaffected.
 */
export function middleware(request: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") {
    return NextResponse.next();
  }

  const canonicalHost = getCanonicalHost();
  const host = request.headers.get("host")?.split(":")[0];

  if (!canonicalHost || !host || host === canonicalHost) {
    return NextResponse.next();
  }

  const rootDomain = (hostname: string) => hostname.replace(/^www\./, "");

  if (rootDomain(host) !== rootDomain(canonicalHost)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.host = canonicalHost;
  url.protocol = "https:";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
