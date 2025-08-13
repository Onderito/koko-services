import Image from "next/image";
import Link from "next/link";

export default function WhyChauffeurPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-chauffeur.webp" // **ACTION REQUIRED: Replace with a relevant image (e.g., luxury car interior, coastal road)**
            alt="Private chauffeur on the French Riviera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[14px] md:text-[16px] bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-manrope-regular mb-6">
              Traveler's Guide
            </span>
            
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-manrope-bold text-white leading-tight mb-6">
              Why Private Chauffeur Services Are Essential on the French Riviera
            </h1>
            
            <p className="text-[16px] md:text-[20px] text-gray-200 max-w-2xl mx-auto mb-8">
              Explore the key benefits of booking a personal driver in Nice, Cannes, and Monaco.
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-300 text-[14px] md:text-[16px]">
              <span>5 min read</span>
              <span>•</span>
              <span>February 2, 2025</span>
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
              <li><a href="#navigating-riviera" className="hover:text-[#404040] transition-colors duration-300 text-sm">Navigating the Riviera: A Unique Challenge</a></li>
              <li><a href="#time-efficiency" className="hover:text-[#404040] transition-colors duration-300 text-sm">1. Unmatched Time-Saving and Efficiency</a></li>
              <li><a href="#comfort-luxury" className="hover:text-[#404040] transition-colors duration-300 text-sm">2. Uncompromising Comfort and Luxury</a></li>
              <li><a href="#local-expertise" className="hover:text-[#404040] transition-colors duration-300 text-sm">3. Local Expertise and Route Knowledge</a></li>
              <li><a href="#safety-discretion" className="hover:text-[#404040] transition-colors duration-300 text-sm">4. Safety, Discretion, and Peace of Mind</a></li>
            </ul>
          </nav>

          {/* Article Content with Enhanced SEO Structure */}
          <article className="max-w-none" itemScope itemType="https://schema.org/Article">
            
            {/* Hidden Schema Data */}
            <div className="hidden">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Koko Services</span>
              </span>
              <time itemProp="datePublished" dateTime="2025-02-02">2025-02-02</time>
              <span itemProp="headline">Why Private Chauffeur Services Are Essential on the French Riviera</span>
            </div>

            <section id="navigating-riviera" className="scroll-mt-24 mb-12">
              <h2 className="text-2xl md:text-3xl font-manrope-bold text-[#404040] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#404040] rounded-full"></span>
                Navigating the Riviera: A Unique Challenge
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The French Riviera is synonymous with beauty, but its winding coastal roads, bustling cities, and world-famous events can make travel complex. Parking is scarce and expensive, and traffic, especially in high season, can be unpredictable. This is where a private chauffeur transforms the experience.
                </p>
              </div>
            </section>

            <section id="time-efficiency" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                1. Unmatched Time-Saving and Efficiency
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Your time is valuable. Instead of spending it deciphering maps, searching for parking, or waiting for a taxi, you can relax or work.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Seamless Airport Transfers:</strong> Personalized meet-and-greet service upon your arrival at Nice Côte d'Azur Airport.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Guaranteed Punctuality:</strong> Arrive on time for your business meetings, restaurant reservations, or events.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Optimized Routes:</strong> Your driver knows the fastest routes to avoid traffic congestion.</div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="comfort-luxury" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                2. Uncompromising Comfort and Luxury
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                The journey should be as enjoyable as the destination. Our services are designed to provide a first-class experience.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">High-End Vehicles:</strong> Travel in luxury sedans like the Mercedes-Benz S-Class, always kept in immaculate condition.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Onboard Amenities:</strong> Enjoy refreshments, Wi-Fi, and a climate-controlled environment for total comfort.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Luggage Handling:</strong> Your chauffeur takes care of your luggage, allowing you to travel hands-free.</div>
                  </li>
                </ul>
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
                      "On the French Riviera, true luxury isn't just about where you go, but how you get there. We ensure every journey is an experience in itself."
                    </p>
                    <cite className="text-[#404040] font-manrope-bold text-sm">— The Koko Services Team</cite>
                  </div>
                </div>
              </blockquote>
            </div>

            <section id="local-expertise" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                3. Local Expertise and Route Knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                A GPS can't replace years of on-the-ground experience. Our chauffeurs are local experts who provide more than just a ride—they offer a gateway to the Riviera's best-kept secrets.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Insider Knowledge:</strong> Discover scenic shortcuts, the best photo spots, and hidden gems only a local would know.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Event Navigation:</strong> Effortlessly navigate the complex logistics of events like the Cannes Film Festival or Monaco Grand Prix.</div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="safety-discretion" className="scroll-mt-24 mb-12">
              <h3 className="text-xl md:text-2xl font-manrope-bold text-[#404040] mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#404040] rounded-full"></span>
                4. Safety, Discretion, and Peace of Mind
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Your safety and privacy are our top priorities. Hiring a professional service guarantees a secure and confidential travel experience.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Professional Drivers:</strong> All chauffeurs are licensed, insured, and trained to the highest standards of defensive driving.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#404040] rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-[#404040]">Complete Discretion:</strong> Ideal for business executives, celebrities, and anyone who values their privacy.</div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Call-to-Action Section */}
            <div className="mt-16 p-8 bg-[#404040] rounded-lg text-center">
              <h3 className="text-xl font-manrope-bold text-white mb-4">
                Ready to Elevate Your Riviera Experience?
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Book your private chauffeur with Koko Services and discover the ultimate in comfort, convenience, and luxury.
              </p>
              <Link 
                href="/booking"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#404040] px-8 py-3 rounded-lg font-manrope-bold transition-all duration-300"
              >
                Book Your Chauffeur
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
