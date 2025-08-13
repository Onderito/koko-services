import Image from "next/image";
import Link from "next/link";

export default function LuxuryEventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-luxury-events.webp" // **ACTION REQUIRED: Replace with a relevant image (e.g., view of Monaco or Cannes)**
            alt="Luxury events on the French Riviera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[14px] md:text-[16px] bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-manrope-regular mb-6">
              Event Guide
            </span>
            
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-manrope-bold text-white leading-tight mb-6">
              Top 5 Luxury Events in the South of France (and How to Get There)
            </h1>
            
            <p className="text-[16px] md:text-[20px] text-gray-200 max-w-2xl mx-auto mb-8">
              From the Cannes Film Festival to private galas — arrive in style and on time with an exceptional chauffeur service.
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-300 text-[14px] md:text-[16px]">
              <span>8 min read</span>
              <span>•</span>
              <span>January 15, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-2 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-lg font-manrope-bold text-[#404040] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#404040] rounded-full"></span>
              Table of Contents
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#cannes-film-festival" className="hover:text-[#404040] transition-colors duration-300 text-sm">1. Cannes Film Festival: The Pinnacle of Cinema and Glamour</a></li>
              <li><a href="#monaco-grand-prix" className="hover:text-[#404040] transition-colors duration-300 text-sm">2. Monaco Grand Prix: Speed and Prestige</a></li>
              <li><a href="#monaco-yacht-show" className="hover:text-[#404040] transition-colors duration-300 text-sm">3. Monaco Yacht Show: The Superyachting Rendezvous</a></li>
              <li><a href="#voiles-saint-tropez" className="hover:text-[#404040] transition-colors duration-300 text-sm">4. Les Voiles de Saint-Tropez: Nautical Elegance</a></li>
              <li><a href="#nice-carnival" className="hover:text-[#404040] transition-colors duration-300 text-sm">5. Nice Carnival: The Winter Celebration</a></li>
              <li><a href="#how-to-get-there" className="hover:text-[#404040] transition-colors duration-300 text-sm">How to Get There: The Private Chauffeur Solution</a></li>
            </ul>
          </nav>

          {/* Article Content with Enhanced SEO Structure */}
          <article className="max-w-none" itemScope itemType="https://schema.org/Article">
            
            {/* Hidden Schema Data */}
            <div className="hidden">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Koko Services</span>
              </span>
              <time itemProp="datePublished" dateTime="2025-01-15">2025-01-15</time>
              <span itemProp="headline">Top 5 Luxury Events in the South of France (and How to Get There )</span>
            </div>

            <section id="cannes-film-festival" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                1. Cannes Film Festival: The Pinnacle of Cinema and Glamour
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Every May, Cannes becomes the global epicenter of cinema. Attending screenings, exclusive parties, and walking the red carpet requires flawless logistics.
                </p>
              </div>
              <h4 className="text-lg font-manrope-bold text-[#404040] mb-4">Arriving in Style:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">A private chauffeur transfer from Nice Airport to Cannes ensures a discreet and punctual arrival, far from the stress of public transport. Your driver handles restricted access areas and drops you off as close as possible to prestigious locations like the Palais des Festivals or the grand hotels on the Croisette.</p>
            </section>

            <section id="monaco-grand-prix" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                2. Monaco Grand Prix: Speed and Prestige
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The world's most famous street circuit transforms the Principality into a theater of speed and exclusivity. Access and parking become a real challenge.
                </p>
              </div>
              <h4 className="text-lg font-manrope-bold text-[#404040] mb-4">Your Privileged Access:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">A chauffeur service is the ideal solution. They master alternative routes and strategic drop-off points to help you avoid massive traffic jams. Enjoy the journey from Nice or your villa to soak in the atmosphere, while we handle the road.</p>
            </section>
            
            <section id="monaco-yacht-show" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                3. Monaco Yacht Show: The Superyachting Rendezvous
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">At the end of September, Port Hercule showcases the world's most luxurious superyachts. It's an unmissable event for yachting enthusiasts and key players in the luxury industry.</p>
              <h4 className="text-lg font-manrope-bold text-[#404040] mb-4">Perfect On-Land Navigation:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">Let your chauffeur drive you directly to the show's entrance. An "as-directed" service allows you to move easily between the show, business meetings, and private parties without any logistical worries.</p>
            </section>

            <section id="voiles-saint-tropez" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                4. Les Voiles de Saint-Tropez: Nautical Elegance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">This spectacular regatta brings together classic and modern sailboats in the legendary Gulf of Saint-Tropez. Access to the village, especially during the event, is notoriously difficult.</p>
              <h4 className="text-lg font-manrope-bold text-[#404040] mb-4">Avoid the Traffic Hassles:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">The journey from Nice or Cannes to Saint-Tropez can be long and congested. An experienced driver knows the best times and routes to optimize your travel, ensuring a serene arrival to enjoy the nautical spectacle.</p>
            </section>

            <section id="nice-carnival" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                5. Nice Carnival: The Winter Celebration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">One of the world's largest carnivals, famous for its parades and "flower battles." A popular event that brings parts of the city to a standstill.</p>
              <h4 className="text-lg font-manrope-bold text-[#404040] mb-4">Your Front-Row Seat:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">Your chauffeur will drop you off at the most convenient access points, saving you the trouble of finding parking and navigating closed streets. Enjoy the festivities to the fullest; we'll handle your safe return.</p>
            </section>

            {/* Enhanced Quote Section */}
            <div className="my-12">
              <blockquote className="p-8 border-l-4 border-[#404040] bg-gray-50 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#404040] text-2xl font-serif">"</span>
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                      "For the major events on the French Riviera, peace of mind is the ultimate luxury. We turn logistical complexity into a seamless and elegant experience."
                    </p>
                    <cite className="text-[#404040] font-manrope-bold text-sm">— The Koko Services Team</cite>
                  </div>
                </div>
              </blockquote>
            </div>

            <section id="how-to-get-there" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                The Chauffeur Solution: Your Passport to the Events
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                A private chauffeur service is more than just transportation; it's a strategic advantage:
              </p>

              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Guaranteed punctuality so you don't miss a thing",
                    "Knowledge of VIP access and drop-off points",
                    "Flexibility for last-minute schedule changes",
                    "Luxury vehicles for optimal comfort",
                    "Discretion and professionalism assured"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 bg-[#404040] rounded-full"></span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call-to-Action Section */}
            <div className="mt-16 p-8 bg-[#404040] rounded-lg text-center">
              <h3 className="text-xl font-manrope-bold text-white mb-4">
                Planning your trip for the next big event?
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Book your private chauffeur with Koko Services and experience the French Riviera without constraints.
              </p>
              <Link 
                href="/booking"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#404040] px-8 py-3 rounded-lg font-manrope-bold transition-all duration-300"
              >
                Book My Chauffeur
                <span className="text-lg">→</span>
              </Link>
            </div>
          </article>

          {/* Simple Navigation */}
          <nav className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#404040] hover:text-gray-600 transition-colors duration-300 font-manrope-regular"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
