import type { Metadata } from "next";
import "./globals.css";

const title = "Iceem.tn | Engineering & Maintenance Experts";
const description = "Iceem.tn delivers innovative engineering, industrial cold, and maintenance solutions across Tunisia with unmatched reliability.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://iceem.tn",
    siteName: "Iceem",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "Industrial engineering team at work"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"]
  },
  metadataBase: new URL("https://iceem.tn"),
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
