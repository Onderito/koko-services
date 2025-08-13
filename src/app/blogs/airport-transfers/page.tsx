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
          
          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Nice Côte d'Azur Airport: Your Gateway to the Riviera</h2>
            <p>Nice Côte d'Azur Airport serves as the primary gateway to the French Riviera, welcoming millions of passengers annually. Whether you're arriving for business, leisure, or a special event, your airport transfer experience sets the tone for your entire stay on the Riviera.</p>
            
            <h3>What Sets Premium Airport Transfers Apart</h3>
            <p>A premium chauffeur service transforms the often stressful airport experience into a seamless, luxurious transition to your destination.</p>
            
            <h4>Pre-Arrival Preparation</h4>
            <ul>
              <li><strong>Flight Monitoring:</strong> We track your flight in real-time to adjust pickup times for delays or early arrivals</li>
              <li><strong>Meet & Greet Service:</strong> Your chauffeur will be waiting in the arrivals hall with a personalized sign</li>
              <li><strong>Luggage Assistance:</strong> Professional handling of all baggage, from terminal to vehicle</li>
              <li><strong>VIP Treatment:</strong> Fast-track services available for premium passengers</li>
            </ul>
            
            <h4>The Premium Vehicle Experience</h4>
            <p>Our fleet consists of luxury vehicles maintained to the highest standards:</p>
            <ul>
              <li>Mercedes-Benz S-Class and E-Class vehicles</li>
              <li>Immaculate interior and exterior presentation</li>
              <li>Climate control and premium sound systems</li>
              <li>Complimentary Wi-Fi and device charging</li>
              <li>Refreshments and local information guides</li>
            </ul>
            
            <h3>Route Expertise and Local Knowledge</h3>
            <p>Our chauffeurs possess intimate knowledge of the Riviera's road networks, ensuring efficient and scenic routes to your destination.</p>
            
            <h4>Popular Destinations from Nice Airport:</h4>
            <ul>
              <li><strong>Nice City Center:</strong> 15-20 minutes via the Promenade des Anglais</li>
              <li><strong>Cannes:</strong> 45-60 minutes along the coastal A8 autoroute</li>
              <li><strong>Monaco:</strong> 30-45 minutes via the scenic coastal route</li>
              <li><strong>Antibes:</strong> 25-35 minutes through the heart of the Riviera</li>
              <li><strong>Saint-Tropez:</strong> 90-120 minutes through Provence countryside</li>
            </ul>
            
            <blockquote>
              <p>"The journey from the airport should be as memorable as the destination itself. We don't just provide transportation—we begin your Riviera experience the moment you land."</p>
            </blockquote>
            
            <h3>Business Travel Excellence</h3>
            <p>For business travelers, punctuality and professionalism are paramount:</p>
            <ul>
              <li>Guaranteed on-time arrivals for meetings and events</li>
              <li>Quiet, comfortable environment for calls and work</li>
              <li>Flexible scheduling for changing itineraries</li>
              <li>Discrete, professional service</li>
              <li>Corporate account management available</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-manrope-regular"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}