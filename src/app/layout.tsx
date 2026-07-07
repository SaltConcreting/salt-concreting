import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import {
  buildOpenGraph,
  buildTwitter,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
} from "@/lib/metadata";
import { buildSiteSchemaGraph } from "@/lib/schema";
import { getSiteOrigin } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteOrigin(),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  twitter: buildTwitter({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <JsonLd data={buildSiteSchemaGraph()} />
        {children}
      </body>
    </html>
  );
}
