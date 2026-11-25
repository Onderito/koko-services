// BreadcrumbList structured data written into the page's HTML (a plain script tag rendered on the server), so crawlers
// read it without running JavaScript, as on the private tour pages. Each item is a page name and its full address.

type BreadcrumbItem = { name: string; url: string };

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
