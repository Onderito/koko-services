import Image from "next/image";
import Link from "next/link";

export default function AirportTransfersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-airport.webp"
            alt="Airport transfers Nice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[14px] md:text-[16px] bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-manrope-regular mb-6">
              Airport Transfer
            </span>
            
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-manrope-bold text-white leading-tight mb-6">
              Airport Transfers in Nice: What to Expect From a Premium Chauffeur
            </h1>
            
            <p className="text-[16px] md:text-[20px] text-gray-200 max-w-2xl mx-auto mb-8">
              Stress-free pickups, punctuality, and high-end comfort for your next flight.
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-300 text-[14px] md:text-[16px]">
              <span>6 min read</span>
              <span>•</span>
              <span>5 décembre 2024</span>
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
              <li><a href="#gateway-riviera" className="hover:text-[#404040] transition-colors duration-300 text-sm">Nice Côte d'Azur Airport: Your Gateway to the Riviera</a></li>
              <li><a href="#premium-transfers" className="hover:text-[#404040] transition-colors duration-300 text-sm">What Sets Premium Airport Transfers Apart</a></li>
              <li><a href="#route-expertise" className="hover:text-[#404040] transition-colors duration-300 text-sm">Route Expertise and Local Knowledge</a></li>
              <li><a href="#business-excellence" className="hover:text-[#404040] transition-colors duration-300 text-sm">Business Travel Excellence</a></li>
            </ul>
          </nav>

          {/* Article Content with Enhanced SEO Structure */}
          <article className="max-w-none" itemScope itemType="https://schema.org/Article">
            
            {/* Hidden Schema Data */}
            <div className="hidden">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Koko Services</span>
              </span>
              <time itemProp="datePublished" dateTime="2024-12-05">2024-12-05</time>
              <span itemProp="headline">Airport Transfers in Nice: What to Expect From a Premium Chauffeur</span>
            </div>

            <section id="gateway-riviera" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                Nice Côte d'Azur Airport: Your Gateway to the Riviera
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Nice Côte d'Azur Airport serves as the primary gateway to the French Riviera, welcoming millions of passengers annually. Whether you're arriving for business, leisure, or a special event, your airport transfer experience sets the tone for your entire stay on the Riviera.
                </p>
              </div>
            </section>

            <section id="premium-transfers" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                What Sets Premium Airport Transfers Apart
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                A premium chauffeur service transforms the often stressful airport experience into a seamless, luxurious transition to your destination.
              </p>

              {/* Enhanced Service Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="group">
                  <h4 className="text-lg font-manrope-bold text-[#404040] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#404040] rounded-full"></span>
                    Pre-Arrival Preparation
                  </h4>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-[#404040]">Flight Monitoring:</strong> We track your flight in real-time to adjust pickup times for delays or early arrivals
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-[#404040]">Meet & Greet Service:</strong> Your chauffeur will be waiting in the arrivals hall with a personalized sign
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-[#404040]">Luggage Assistance:</strong> Professional handling of all baggage, from terminal to vehicle
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-[#404040]">VIP Treatment:</strong> Fast-track services available for premium passengers
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="group">
                  <h4 className="text-lg font-manrope-bold text-[#404040] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#404040] rounded-full"></span>
                    The Premium Vehicle Experience
                  </h4>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700 mb-4">Our fleet consists of luxury vehicles maintained to the highest standards:</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Mercedes-Benz S-Class and E-Class vehicles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Immaculate interior and exterior presentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Climate control and premium sound systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Complimentary Wi-Fi and device charging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                        <span>Refreshments and local information guides</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="route-expertise" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                Route Expertise and Local Knowledge
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Our chauffeurs possess intimate knowledge of the Riviera's road networks, ensuring efficient and scenic routes to your destination.
              </p>

              {/* Destinations List */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm mb-8">
                <h4 className="text-lg font-manrope-bold text-[#404040] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#404040] rounded-full"></span>
                  Popular Destinations from Nice Airport:
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                      <h5 className="font-manrope-bold text-[#404040] mb-1">Nice City Center</h5>
                      <p className="text-gray-600 text-sm font-medium mb-1">15-20 minutes</p>
                      <p className="text-gray-500 text-xs">via the Promenade des Anglais</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                      <h5 className="font-manrope-bold text-[#404040] mb-1">Monaco</h5>
                      <p className="text-gray-600 text-sm font-medium mb-1">30-45 minutes</p>
                      <p className="text-gray-500 text-xs">via the scenic coastal route</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                      <h5 className="font-manrope-bold text-[#404040] mb-1">Antibes</h5>
                      <p className="text-gray-600 text-sm font-medium mb-1">25-35 minutes</p>
                      <p className="text-gray-500 text-xs">through the heart of the Riviera</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                      <h5 className="font-manrope-bold text-[#404040] mb-1">Cannes</h5>
                      <p className="text-gray-600 text-sm font-medium mb-1">45-60 minutes</p>
                      <p className="text-gray-500 text-xs">along the coastal A8 autoroute</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-300">
                      <h5 className="font-manrope-bold text-[#404040] mb-1">Saint-Tropez</h5>
                      <p className="text-gray-600 text-sm font-medium mb-1">90-120 minutes</p>
                      <p className="text-gray-500 text-xs">through Provence countryside</p>
                    </div>
                  </div>
                </div>
              </div>
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
                      "The journey from the airport should be as memorable as the destination itself. We don't just provide transportation—we begin your Riviera experience the moment you land."
                    </p>
                    <cite className="text-[#404040] font-manrope-bold text-sm">— Koko Services Team</cite>
                  </div>
                </div>
              </blockquote>
            </div>

            <section id="business-excellence" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                Business Travel Excellence
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                For business travelers, punctuality and professionalism are paramount:
              </p>

              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Guaranteed on-time arrivals for meetings and events",
                    "Quiet, comfortable environment for calls and work",
                    "Flexible scheduling for changing itineraries",
                    "Discrete, professional service",
                    "Corporate account management available"
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
                Ready for your premium transfer?
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Book your airport transfer now and experience the excellence of Koko Services.
              </p>
              <Link 
                href="/booking"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#404040] px-8 py-3 rounded-lg font-manrope-bold transition-all duration-300"
              >
                Book Now
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