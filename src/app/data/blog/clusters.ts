import type { ClusterId } from "./types";

export type ClusterConfig = {
  id: ClusterId;
  slug: string; // /blog/category/<slug>
  label: string; // short chip / nav label
  title: string; // hub H1 + <title> (kept <= 60 chars incl. brand suffix)
  description: string; // hub meta description + intro (kept <= 160 chars)
};

// Hub-and-spoke topic hubs. Titles/descriptions follow the SEO limits
// (title <= 60 chars incl. " | kokolimo", meta description <= 160 chars).
export const clusters: ClusterConfig[] = [
  {
    id: "routes",
    slug: "airport-transfers",
    label: "Airport Transfers",
    title: "Airport Transfers & Riviera Route Guides",
    description:
      "Nice Airport transfer guides and point-to-point routes to Monaco, Cannes, Saint-Tropez and across the French Riviera.",
  },
  {
    id: "destinations",
    slug: "destinations",
    label: "Destinations",
    title: "French Riviera Destination Guides",
    description:
      "City and destination guides for Nice, Monaco, Cannes, Saint-Tropez, Antibes and the wider French Riviera.",
  },
  {
    id: "yacht",
    slug: "yacht-transfers",
    label: "Yacht Transfers",
    title: "Yacht & Marina Transfer Guides",
    description:
      "Yacht, marina and superyacht transfer guides across Monaco, Cannes, Antibes and the French Riviera.",
  },
  {
    id: "events",
    slug: "events",
    label: "Events",
    title: "Riviera Luxury Event Transport Guides",
    description:
      "Transport guides for the Monaco Grand Prix, Cannes Film Festival, Monaco Yacht Show and other Riviera events.",
  },
  {
    id: "hotels",
    slug: "luxury-hotels",
    label: "Luxury Hotels",
    title: "Luxury Hotel Transfer Guides",
    description:
      "Chauffeur and transfer guides for the finest luxury hotels across Monaco, Cannes, Saint-Tropez and the Riviera.",
  },
  {
    id: "guides",
    slug: "travel-guides",
    label: "Travel Guides",
    title: "French Riviera Travel Guides",
    description:
      "Best-of guides and practical travel tips for luxury trips across Nice, Monaco, Cannes and the French Riviera.",
  },
  {
    id: "services-explained",
    slug: "chauffeur-services",
    label: "Chauffeur Services",
    title: "Chauffeur Service Guides & Comparisons",
    description:
      "How private chauffeur, hourly hire and executive transfer services work on the French Riviera.",
  },
];

export const clusterById: Record<ClusterId, ClusterConfig> = Object.fromEntries(
  clusters.map((cluster) => [cluster.id, cluster]),
) as Record<ClusterId, ClusterConfig>;

export const clusterBySlug: Record<string, ClusterConfig> = Object.fromEntries(
  clusters.map((cluster) => [cluster.slug, cluster]),
);
