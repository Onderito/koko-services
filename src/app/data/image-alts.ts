// What each shared photo shows, for its alt text: the closing banners, the navy split cards, the blog's booking banner,
// the site footer, the Partners page and the pages' default sharing picture. A photo that is a page's own hero or a post's cover keeps the alt text written
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

// The same photos described in French, for the French pages (/fr/...), plus the blog covers a French page shows on its
// link cards. Every photo of IMAGE_ALT has its French line here, so a French page never shows an English alt text.
export const IMAGE_ALT_FR: Record<string, string> = {
  "/assets/images/services/transfer.webp": "L'aile d'un avion au-dessus des nuages, vue depuis un hublot",
  "/assets/images/services/private-tour.webp": "La main d'un chauffeur ouvrant la portière d'une voiture noire au coucher du soleil",
  "/assets/images/cars/class-v/class-v-third.webp": "Un van Mercedes Classe V noir devant le Casino de Monte-Carlo, la nuit",
  "/assets/images/services/long-distance.webp": "Transfert longue distance avec un chauffeur privé",
  "/assets/images/services/driver.webp": "Excursion avec chauffeur privé sur la Côte d'Azur",
  "/assets/images/banners/svc-transfers.jpg": "Une berline Mercedes noire attend devant un terminal d'aéroport en bord de mer au coucher du soleil, pendant qu'un avion décolle",
  "/assets/images/banners/svc-hourly.jpg": "Une Mercedes Classe S noire sur un quai du port au crépuscule, devant des superyachts et une ville illuminée à flanc de colline",
  "/assets/images/banners/svc-tours.jpg": "Un van Mercedes Classe V noir sur une route côtière au crépuscule, sous un village perché illuminé au-dessus de la mer",
  "/assets/images/banners/svc-yacht.jpg": "Un van Mercedes Classe V noir sur un quai, à côté de superyachts, au crépuscule",
  "/assets/images/banners/svc-events.jpg": "Une Mercedes-Maybach noire devant un palace du bord de mer bordé de palmiers, au crépuscule",
  "/assets/images/banners/cta-s-class-rear.jpg": "L'arrière d'une Mercedes Classe S noire sur la route côtière qui surplombe la Côte d'Azur, au crépuscule",
  "/assets/images/banners/footer-monaco-dusk.jpg": "Une Mercedes noire sur la route côtière au-dessus de Monaco et de son port, au crépuscule",
  "/assets/images/services/luxury-hotel.webp": "Un palace blanc de la Belle Époque, avec ses balcons arrondis, ses palmiers et ses jardins, sur la Côte d'Azur",
  "/assets/images/blog/corporate-chauffeur-service.webp": "Un chauffeur en uniforme tient la portière à un voyageur d'affaires devant un hôtel en bord de mer",
  "/assets/images/blog/airport-meet-and-greet-explained.webp": "Un chauffeur en costume accueille un voyageur à son arrivée, à côté d'une berline de luxe noire",
  "/assets/images/services/yacht-transfers.webp": "Une Mercedes noire avec son chauffeur à côté d'un superyacht, pour un transfert vers un yacht",
  "/assets/images/services/events.webp": "Un chauffeur arrive en Mercedes noire à un événement de la Côte d'Azur",
  "/assets/images/hero-img.webp": "Un chauffeur en costume à côté d'un van Mercedes Classe V noir sur le quai du port Hercule, à Monaco",
  "/assets/images/blog/getting-around-monaco.webp": "Le port de Monaco et les immeubles de Monte-Carlo, avec des superyachts et le quartier du casino, à l'heure dorée",
};

/** The photo's alt text, in French for a French page, or "" for a photo these lists do not know (add it here). */
export const altFor = (src: string, locale?: "fr") => (locale === "fr" ? IMAGE_ALT_FR : IMAGE_ALT)[src] ?? "";
