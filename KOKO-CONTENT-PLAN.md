# Kokolimo — İçerik Master Planı (120 Blog Makalesi + ~19 Servis Sayfası)

**Mimari:** Bölünmüş TS dosyaları (`src/app/data/blog/*.ts`), mevcut `BlogPost` yapısı ve `blog/[slug]` şablonu aynen kullanılır.
**Niyet ayrımı:** Ticari kelimeler → `/our-services` (servis sayfası). Bilgilendirici kelimeler → `/blog` (makale). Her makale ilgili servis sayfasına link verir.

---

## BÖLÜM 1 — `/our-services` Ticari Sayfalar (~19 çekirdek + 4 opsiyonel)

Bunlar makale sayısına (120) dahil DEĞİL; ayrı, programatik servis sayfalarıdır (mevcut `service-pages.ts` desenine eklenir).

### 1a. Transfer rotaları — `transfers/[slug]` (8)
| Slug | Hedef anahtar kelime |
|---|---|
| `/our-services/transfers/monaco-airport-transfer` | Monaco Airport Transfer / Nice Airport to Monaco |
| `/our-services/transfers/cannes-airport-transfer` | Cannes Airport Transfer |
| `/our-services/transfers/saint-tropez-transfer` | Nice to Saint-Tropez Transfer |
| `/our-services/transfers/antibes-transfer` | Antibes Airport Transfer |
| `/our-services/transfers/saint-jean-cap-ferrat-transfer` | Saint-Jean-Cap-Ferrat Transfer |
| `/our-services/transfers/eze-transfer` | Èze Transfer |
| `/our-services/transfers/villefranche-transfer` | Villefranche-sur-Mer Transfer |
| `/our-services/transfers/menton-transfer` | Menton Transfer |

### 1b. Yat transferleri — `yacht-transfers/` YENİ HUB (7)
| Slug | Hedef anahtar kelime |
|---|---|
| `/our-services/yacht-transfers` | Yacht Transfers French Riviera (hub) |
| `/our-services/yacht-transfers/monaco` | Yacht Transfer Monaco / Port Hercule |
| `/our-services/yacht-transfers/cannes` | Cannes Yacht Transfer |
| `/our-services/yacht-transfers/saint-tropez` | Saint-Tropez Yacht Transfer |
| `/our-services/yacht-transfers/antibes` | Port Vauban Yacht Transfer |
| `/our-services/yacht-transfers/nice-airport` | Nice Airport to Yacht Transfer |
| `/our-services/yacht-transfers/crew-transportation` | Crew Transportation Monaco |

### 1c. Etkinlikler — `events/` YENİ HUB (4)
| Slug | Hedef anahtar kelime |
|---|---|
| `/our-services/events` | Luxury Event Transportation French Riviera (hub) |
| `/our-services/events/monaco-grand-prix` | Monaco Grand Prix Transportation |
| `/our-services/events/cannes-film-festival` | Cannes Film Festival Transportation |
| `/our-services/events/monaco-yacht-show` | Monaco Yacht Show Transportation |

### 1d. (Opsiyonel) Şehir şoför sayfaları — `chauffeur-service/[city]` (4)
`chauffeur-service/{monaco, nice, cannes, saint-tropez}` — "Monaco Chauffeur Service", "Private Driver Nice" vb. head terimler için. *Not: `hourly-chauffeur/[city]` ile örtüşmemesi için farklı açı (genel şehir şoförü vs saatlik).*

---

## BÖLÜM 2 — 120 Blog Makalesi Master Listesi

**Sütunlar:** No · Slug (`/blog/…`) · Hedef anahtar kelime · Niyet · Ana iç linkler (hub + servis)
**Dosya:** her küme kendi TS dosyasında → `src/app/data/blog/`

### Küme A — Havalimanı & Rota Rehberleri (20) → `data/blog/routes.ts`
Ticari transfer sayfalarının **bilgilendirici** karşılıkları. Her biri servis sayfasına link verir.

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 1 | nice-airport-to-monaco | best way Nice Airport to Monaco | Info | transfers/monaco-airport-transfer |
| 2 | nice-airport-to-cannes | Nice Airport to Cannes transfer | Info | transfers/cannes-airport-transfer |
| 3 | nice-airport-to-saint-tropez | Nice Airport to Saint-Tropez | Info | transfers/saint-tropez-transfer |
| 4 | nice-airport-to-antibes | Nice Airport to Antibes | Info | transfers/antibes-transfer |
| 5 | nice-airport-to-cap-dantibes | Nice Airport to Cap d'Antibes | Info | transfers/antibes-transfer |
| 6 | nice-airport-to-saint-jean-cap-ferrat | Nice Airport to Saint-Jean-Cap-Ferrat | Info | transfers/saint-jean-cap-ferrat-transfer |
| 7 | nice-airport-to-eze | Nice Airport to Èze | Info | transfers/eze-transfer |
| 8 | nice-airport-to-beaulieu-sur-mer | Nice Airport to Beaulieu-sur-Mer | Info | transfers/villefranche-transfer |
| 9 | nice-airport-to-villefranche-sur-mer | Nice Airport to Villefranche | Info | transfers/villefranche-transfer |
| 10 | nice-airport-to-menton | Nice Airport to Menton | Info | transfers/menton-transfer |
| 11 | nice-airport-to-monaco-heliport | Monaco Heliport transfer vs car | Info | transfers/monaco-airport-transfer |
| 12 | nice-cote-dazur-airport-terminals-guide | Nice Airport terminals & arrivals | Info | transfers (hub) |
| 13 | airport-meet-and-greet-explained | airport meet and greet service | Info | transfers (hub) |
| 14 | nice-to-saint-tropez-road-vs-boat | Nice to Saint-Tropez road vs boat | Info | transfers/saint-tropez-transfer |
| 15 | nice-airport-to-isola-2000-ski-transfer | Nice Airport to Isola 2000 ski | Info | transfers (hub) |
| 16 | nice-airport-to-sophia-antipolis | Nice Airport to Sophia Antipolis | Info | transfers (hub) |
| 17 | nice-airport-to-grasse | Nice Airport to Grasse | Info | transfers (hub) |
| 18 | nice-airport-to-mougins | Nice Airport to Mougins | Info | transfers (hub) |
| 19 | nice-airport-to-sanremo-italy | Nice Airport to Sanremo | Info | transfers (hub) |
| 20 | nice-airport-late-night-arrival-transfer | late night Nice Airport transfer | Info | transfers (hub) |

### Küme B — Destinasyon / Şehir Rehberleri (20) → `data/blog/destinations.ts`

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 21 | getting-around-nice-without-a-car | getting around Nice | Info | chauffeur/nice |
| 22 | best-things-to-do-in-nice | things to do in Nice | Info | private-tours/nice |
| 23 | getting-around-monaco-chauffeur-guide | getting around Monaco | Info | chauffeur/monaco |
| 24 | monaco-in-one-day-itinerary | Monaco in one day | Info | private-tours/monaco |
| 25 | getting-around-cannes-guide | getting around Cannes | Info | chauffeur/cannes |
| 26 | best-things-to-do-in-cannes | things to do in Cannes | Info | private-tours/cannes |
| 27 | getting-around-saint-tropez | getting around Saint-Tropez | Info | chauffeur/saint-tropez |
| 28 | saint-tropez-day-trip-itinerary | Saint-Tropez day trip | Info | private-tours/saint-tropez |
| 29 | antibes-juan-les-pins-guide | Antibes visitor guide | Info | private-tours (hub) |
| 30 | things-to-do-in-antibes-private-tour | things to do in Antibes | Info | private-tours (hub) |
| 31 | cap-dantibes-scenic-guide | Cap d'Antibes guide | Info | private-tours (hub) |
| 32 | saint-jean-cap-ferrat-luxury-guide | Saint-Jean-Cap-Ferrat guide | Info | private-tours (hub) |
| 33 | eze-village-visitor-guide | Èze village guide | Info | private-tours (hub) |
| 34 | eze-monaco-half-day-tour | Èze and Monaco half day | Info | private-tours/monaco |
| 35 | beaulieu-sur-mer-guide | Beaulieu-sur-Mer guide | Info | private-tours (hub) |
| 36 | villefranche-sur-mer-cruise-port-guide | Villefranche cruise port | Info | transfers/villefranche-transfer |
| 37 | villefranche-cruise-shore-excursion | Villefranche shore excursion | Info | private-tours (hub) |
| 38 | menton-day-trip-guide | Menton day trip | Info | private-tours (hub) |
| 39 | french-riviera-3-day-itinerary | French Riviera 3 day itinerary | Info | private-tours (hub) |
| 40 | french-riviera-hidden-gems | French Riviera hidden gems | Info | private-tours (hub) |

### Küme C — Yat & Marina Transferleri (18) → `data/blog/yacht.ts` 🆕

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 41 | monaco-yacht-transfer-port-hercule | Yacht Transfer Monaco | Comm-info | yacht-transfers/monaco |
| 42 | nice-airport-to-yacht-transfer | Nice Airport to Yacht Transfer | Comm-info | yacht-transfers/nice-airport |
| 43 | monaco-heliport-to-yacht-transfer | Monaco Heliport to Yacht | Comm-info | yacht-transfers/monaco |
| 44 | cannes-yacht-transfer-guide | Cannes Yacht Transfer | Comm-info | yacht-transfers/cannes |
| 45 | saint-tropez-yacht-transfer-guide | Saint-Tropez Yacht Transfer | Comm-info | yacht-transfers/saint-tropez |
| 46 | antibes-port-vauban-yacht-transfer | Port Vauban Yacht Transfer | Comm-info | yacht-transfers/antibes |
| 47 | superyacht-crew-transportation-monaco | Crew Transportation Monaco | Comm-info | yacht-transfers/crew-transportation |
| 48 | vip-yacht-guest-transportation | VIP Yacht Transportation | Comm-info | yacht-transfers (hub) |
| 49 | superyacht-provisioning-logistics | superyacht provisioning transfer | Info | yacht-transfers/crew-transportation |
| 50 | monaco-yacht-show-transportation-guide | Monaco Yacht Show Transportation | Info | events/monaco-yacht-show |
| 51 | cannes-yachting-festival-transfer | Cannes Yachting Festival transfer | Info | yacht-transfers/cannes |
| 52 | yacht-charter-guest-arrival-chauffeur | yacht charter guest transfer | Comm-info | yacht-transfers (hub) |
| 53 | genoa-la-spezia-shipyard-transfer | shipyard transfer Genoa La Spezia | Info | yacht-transfers (hub) |
| 54 | golfe-juan-marina-transfer | Golfe-Juan marina transfer | Info | yacht-transfers/antibes |
| 55 | beaulieu-marina-yacht-transfer | Beaulieu port yacht transfer | Info | yacht-transfers (hub) |
| 56 | saint-jean-cap-ferrat-marina-transfer | Cap-Ferrat marina transfer | Info | yacht-transfers (hub) |
| 57 | villefranche-bay-tender-pickup | Villefranche tender pickup | Info | yacht-transfers (hub) |
| 58 | how-to-organize-yacht-transfers-riviera | organizing yacht transfers | Info | yacht-transfers (hub) |

### Küme D — Lüks Etkinlik Ulaşımı (15) → `data/blog/events.ts`

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 59 | monaco-grand-prix-transportation-guide | Monaco Grand Prix Transportation | Info | events/monaco-grand-prix |
| 60 | monaco-grand-prix-chauffeur-experience | Monaco GP chauffeur service | Comm-info | events/monaco-grand-prix |
| 61 | cannes-film-festival-transportation-guide | Cannes Film Festival Transportation | Info | events/cannes-film-festival |
| 62 | cannes-film-festival-chauffeur-guide | Cannes Film Festival Chauffeur | Comm-info | events/cannes-film-festival |
| 63 | monaco-yacht-show-visitor-guide | Monaco Yacht Show guide | Info | events/monaco-yacht-show |
| 64 | cannes-lions-transportation | Cannes Lions transport | Info | events (hub) |
| 65 | mipim-cannes-business-transfer | MIPIM Cannes transfer | Info | events (hub) |
| 66 | nice-carnival-guide-and-transport | Nice Carnival guide | Info | events (hub) |
| 67 | menton-lemon-festival-guide | Menton Lemon Festival | Info | events (hub) |
| 68 | monte-carlo-rolex-masters-transport | Rolex Masters Monte-Carlo | Info | events (hub) |
| 69 | jumping-international-monaco-transport | Jumping Monaco transport | Info | events (hub) |
| 70 | monaco-historic-grand-prix-guide | Monaco Historic GP | Info | events/monaco-grand-prix |
| 71 | cannes-fireworks-festival-guide | Cannes fireworks festival | Info | events (hub) |
| 72 | nice-jazz-festival-guide | Nice Jazz Festival | Info | events (hub) |
| 73 | french-riviera-events-calendar | Riviera events calendar | Info | events (hub) |

### Küme E — Lüks Otel Transferleri (18) → `data/blog/hotels.ts`

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 74 | chauffeur-to-hotel-de-paris-monte-carlo | Hôtel de Paris Monte-Carlo transfer | Comm-info | chauffeur/monaco |
| 75 | chauffeur-to-hotel-metropole-monte-carlo | Hotel Metropole Monte-Carlo | Comm-info | chauffeur/monaco |
| 76 | chauffeur-to-hotel-hermitage-monte-carlo | Hotel Hermitage Monte-Carlo | Comm-info | chauffeur/monaco |
| 77 | chauffeur-to-monte-carlo-bay-hotel | Monte-Carlo Bay Hotel transfer | Comm-info | chauffeur/monaco |
| 78 | chauffeur-to-monte-carlo-beach-hotel | Monte-Carlo Beach Hotel | Comm-info | chauffeur/monaco |
| 79 | chauffeur-to-grand-hotel-du-cap-ferrat | Grand-Hôtel du Cap-Ferrat | Comm-info | transfers/saint-jean-cap-ferrat-transfer |
| 80 | chauffeur-to-maybourne-riviera | Maybourne Riviera transfer | Comm-info | transfers/menton-transfer |
| 81 | chauffeur-to-hotel-martinez-cannes | Hotel Martinez Cannes | Comm-info | chauffeur/cannes |
| 82 | chauffeur-to-carlton-cannes | Carlton Cannes transfer | Comm-info | chauffeur/cannes |
| 83 | chauffeur-to-five-seas-hotel-cannes | Five Seas Hotel Cannes | Comm-info | chauffeur/cannes |
| 84 | chauffeur-to-cheval-blanc-st-tropez | Cheval Blanc St-Tropez | Comm-info | chauffeur/saint-tropez |
| 85 | chauffeur-to-byblos-saint-tropez | Byblos Saint-Tropez | Comm-info | chauffeur/saint-tropez |
| 86 | chauffeur-to-la-reserve-ramatuelle | La Réserve Ramatuelle | Comm-info | chauffeur/saint-tropez |
| 87 | chauffeur-to-hotel-du-cap-eden-roc | Hotel du Cap-Eden-Roc | Comm-info | transfers/antibes-transfer |
| 88 | chauffeur-to-le-negresco-nice | Le Negresco Nice | Comm-info | chauffeur/nice |
| 89 | chauffeur-to-anantara-plaza-nice | Anantara Plaza Nice | Comm-info | chauffeur/nice |
| 90 | chauffeur-to-la-chevre-dor-eze | La Chèvre d'Or Èze | Comm-info | transfers/eze-transfer |
| 91 | best-luxury-hotels-riviera-with-transfers | luxury hotels with chauffeur | Info | transfers (hub) |

### Küme F — "Best of" / Bilgilendirici Rehberler (17) → `data/blog/guides.ts`

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 92 | best-luxury-hotels-french-riviera | Best Luxury Hotels French Riviera | Info | hotels (küme E) |
| 93 | best-beach-clubs-saint-tropez | Best Beach Clubs Saint-Tropez | Info | private-tours/saint-tropez |
| 94 | best-beach-clubs-cannes | Best beach clubs Cannes | Info | private-tours/cannes |
| 95 | best-day-trips-from-monaco | Best Day Trips from Monaco | Info | private-tours/monaco |
| 96 | best-day-trips-from-nice | Best day trips from Nice | Info | private-tours/nice |
| 97 | best-day-trips-from-cannes | Best day trips from Cannes | Info | private-tours/cannes |
| 98 | best-restaurants-monaco | Best restaurants Monaco | Info | chauffeur/monaco |
| 99 | best-michelin-restaurants-riviera | Best Michelin restaurants Riviera | Info | private-tours (hub) |
| 100 | best-time-to-visit-french-riviera | Best time to visit French Riviera | Info | (hub) |
| 101 | best-way-nice-airport-to-monaco | Best Way to Travel Nice Airport to Monaco | Info | transfers/monaco-airport-transfer |
| 102 | chauffeur-cost-nice-to-monaco | how much chauffeur Nice to Monaco | Info | transfers/monaco-airport-transfer |
| 103 | nice-vs-cannes-where-to-stay | Nice vs Cannes | Info | (hub) |
| 104 | monaco-first-time-travel-guide | Monaco travel guide | Info | chauffeur/monaco |
| 105 | french-riviera-3-days-luxury-itinerary | French Riviera luxury itinerary | Info | private-tours (hub) |
| 106 | best-wine-tours-near-nice | wine tours near Nice | Info | private-tours/nice |
| 107 | scenic-drives-riviera-corniches | French Riviera corniches drive | Info | private-tours (hub) |
| 108 | best-photo-spots-french-riviera | best photo spots Riviera | Info | private-tours (hub) |

### Küme G — Hizmet Açıklama & Karşılaştırma (12) → `data/blog/services-explained.ts`

| # | Slug | Anahtar kelime | Niyet | İç link |
|---|---|---|---|---|
| 109 | private-chauffeur-vs-taxi-riviera | chauffeur vs taxi French Riviera | Comm-info | chauffeur (hub) |
| 110 | what-is-an-executive-chauffeur | Executive Chauffeur | Info | chauffeur (hub) |
| 111 | hourly-chauffeur-mise-a-disposition | Hourly Chauffeur / mise à disposition | Comm-info | hourly-chauffeur (hub) |
| 112 | limousine-vs-chauffeur-service | Limousine Service | Info | chauffeur (hub) |
| 113 | private-transfer-vs-car-rental | private transfer vs car rental | Info | transfers (hub) |
| 114 | what-to-expect-private-driver | what to expect private driver | Info | chauffeur (hub) |
| 115 | business-corporate-chauffeur-guide | Business Chauffeur | Comm-info | chauffeur/monaco |
| 116 | wedding-chauffeur-service-riviera | wedding chauffeur French Riviera | Comm-info | chauffeur (hub) |
| 117 | group-and-family-transfers-riviera | group family transfers | Info | transfers (hub) |
| 118 | vip-security-discretion-chauffeur | VIP discreet chauffeur | Comm-info | chauffeur (hub) |
| 119 | english-speaking-driver-riviera | English speaking driver Riviera | Info | chauffeur (hub) |
| 120 | how-to-book-private-chauffeur-riviera | how to book private chauffeur | Info | contact-me |

---

## BÖLÜM 3 — İç Linkleme Kuralları (hub-and-spoke)

1. **Her makale** → kendi küme hub'ına + ilgili **servis sayfasına** (dönüşüm) + en az 2 **kardeş makaleye** link verir.
2. **Servis sayfaları** → ilgili 2-3 destek makalesine link verir ("Learn more" bölümü).
3. **Küme hub'ları** (kategori sayfaları) tüm küme makalelerini listeler.
4. `relatedSlugs` alanı küme + coğrafya yakınlığına göre doldurulur (aynı şehir/aynı hizmet önce).
5. Ana sayfa Blog bölümü → 3-4 **featuredOnHome** makale (kümelerden çeşitli).

## BÖLÜM 4 — Depolama Yapısı (bölünmüş TS)

```
src/app/data/blog/
├── index.ts              # tüm kümeleri birleştirip `blogPosts` export eder
├── routes.ts             # Küme A (20)
├── destinations.ts       # Küme B (20)
├── yacht.ts              # Küme C (18)
├── events.ts             # Küme D (15)
├── hotels.ts             # Küme E (18)
├── guides.ts             # Küme F (17)
└── services-explained.ts # Küme G (12)
```
- `blog-posts.ts` → `index.ts`'e taşınır; mevcut 10 yazı uygun kümelere dağıtılır (veya `legacy.ts`).
- `blogPostsBySlug`, `getRelatedPosts`, `featuredHomePosts` helper'ları `index.ts`'te kalır.
- **Gerekli altyapı işleri:** blog index'e **pagination + kategori filtresi**, kategori hub sayfaları, otomatik `relatedPosts` (kategori bazlı).

## BÖLÜM 5 — Kalite Standardı (her makale)
- 1.200–1.800 kelime · 5+ özgün bölüm · 4+ SSS (FAQPage şeması)
- Gerçek yerel veri (fiyat/mesafe/süre) · özgün görsel + alt-text
- 3-5 iç link · **şablon-kopyala YASAK** (Helpful Content riski)

## BÖLÜM 6 — Üretim Yol Haritası
| Faz | İçerik | Öncelik |
|---|---|---|
| 0 | Altyapı (dosya bölme, pagination, kategori, servis şablonları) | İlk |
| 1 | Küme A + B (rota + şehir) | Yüksek ROI |
| 2 | Küme C (yat) | Farklılaştırıcı |
| 3 | Küme D (etkinlik) | Takvime göre (GP/Festival öncesi) |
| 4 | Küme E + F (otel + best-of) | Otorite |
| 5 | Küme G + uzun kuyruk | Tamamlama |

**Kadans:** ~15-20 makale/hafta.
