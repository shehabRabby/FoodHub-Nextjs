
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600"
            alt="Delicious Grilled Food"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in">
            
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold tracking-wider uppercase">Welcome to FoodHub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Delicious Meals <br /> 
              Delivered To Your <br />
              <span className="text-red-500">Doorstep.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-medium">
              Discover the best food from top restaurants. Freshly prepared, 
              fast delivery, and unbeatable taste.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/food" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-500/20 flex items-center gap-2"
              >
                Explore Menu 😋
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-black text-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats for extra "Wow" factor */}
        <div className="absolute bottom-10 right-10 hidden lg:flex gap-8 bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20">
          <div className="text-center">
            <p className="text-3xl font-black text-green-500">50k+</p>
            <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Happy Clients</p>
          </div>
          <div className="h-10 w-px bg-white/20"></div>
          <div className="text-center">
            <p className="text-3xl font-black text-red-500">120+</p>
            <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Cuisines</p>
          </div>
        </div>
      </section>

    </main>
  );
}