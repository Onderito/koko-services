// What each shared photo shows, for its alt text: the closing banners, the navy split cards, the blog's booking banner,
// the site footer and the Partners page. A photo that is a page's own hero or a post's cover keeps the alt text written
// with that page or post (heroImageAlt, imageAlt). A component given no alt text reads it here, so no photo goes without.

export const IMAGE_ALT: Record<string, string> = {
  "/assets/images/services/transfer.webp": "An airplane wing above the clouds, seen through a cabin window",
  "/assets/images/services/private-tour.webp": "A chauffeur's hand opening the door of a black car at sunset",
  "/assets/images/cars/class-v/class-v-third.webp": "A black Mercedes V-Class in front of the Casino de Monte-Carlo at night",
  "/assets/images/services/long-distance.webp": "Long-distance private chauffeur transfer",
  "/assets/images/services/driver.webp": "Private chauffeur tour on the French Riviera",
  "/assets/images/banners/svc-transfers.jpg": "A black Mercedes sedan waiting outside a seaside airport terminal at sunset as a plane takes off",
  "/assets/images/banners/svc-hourly.jpg": "A black Mercedes S-Class on a harbour quay at dusk, with superyachts and a hillside town lit up behind",
  "/assets/images/banners/svc-tours.jpg": "A black Mercedes V-Class on a coastal road at dusk, below a lit hilltop village above the sea",
  "/assets/images/banners/svc-yacht.jpg": "A black Mercedes V-Class on a harbour quay beside superyachts at dusk",
  "/assets/images/banners/svc-events.jpg": "A black Mercedes-Maybach outside a seafront palace hotel lined with palm trees at dusk",
  "/assets/images/banners/cta-s-class-rear.jpg": "The back of a black Mercedes S-Class on the coastal road above the Riviera at dusk",
  "/assets/images/banners/footer-monaco-dusk.jpg": "A black Mercedes on the coastal road above Monaco and its harbour at dusk",
  "/assets/images/services/luxury-hotel.webp": "A white Belle Époque palace hotel with curved balconies, palm trees and gardens on the French Riviera",
  "/assets/images/blog/corporate-chauffeur-service.webp": "A uniformed chauffeur holding the car door for a business traveller outside a seaside hotel",
  "/assets/images/blog/airport-meet-and-greet-explained.webp": "Professional chauffeur in a suit welcoming an arriving traveler beside a black luxury sedan",
  "/assets/images/services/yacht-transfers.webp": "Private chauffeur yacht transfer with a black Mercedes beside a superyacht",
  "/assets/images/services/events.webp": "Luxury event chauffeur with a black Mercedes arriving at a Riviera event",
  "/assets/images/hero-img.webp": "A chauffeur in a suit beside a black Mercedes V-Class on the quay of Port Hercule, Monaco",
};

/** The photo's alt text, or "" for a photo this list does not know (add it here). */
export const altFor = (src: string) => IMAGE_ALT[src] ?? "";
