import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* 1. Hero Section: The Mission */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Bringing the <span className="text-green-600">Heart</span> of the Kitchen to your <span className="text-red-500">Home.</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2024, FoodHub started with a simple idea: everyone deserves access to fresh, high-quality restaurant food without the long wait. We bridge the gap between local culinary masters and hungry foodies.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-600 rounded-3xl -z-10 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
            alt="Chef Cooking" 
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50">
        {[
          { label: "Partner Restaurants", value: "200+", icon: "🏪" },
          { label: "Active Riders", value: "500+", icon: "🛵" },
          { label: "Monthly Orders", value: "15k+", icon: "📦" },
          { label: "Happy Customers", value: "10k+", icon: "😊" },
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Core Values: Why Choose Us */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why <span className="text-green-600">FoodHub</span> is Different</h2>
          <p className="text-gray-500 mt-4">We dont just deliver food; we deliver an experience built on three core pillars.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Freshness First",
              desc: "We ensure all our partner restaurants maintain 5-star hygiene and ingredient freshness standards.",
              icon: "🥗",
              color: "border-green-200 bg-green-50"
            },
            {
              title: "Lightning Speed",
              desc: "Our AI-powered routing ensures your food takes the fastest path from the stove to your door.",
              icon: "⚡",
              color: "border-red-200 bg-red-50"
            },
            {
              title: "Eco-Friendly",
              desc: "From electric bikes to biodegradable packaging, we care about the planet as much as your plate.",
              icon: "🌍",
              color: "border-green-200 bg-green-50"
            }
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-[2rem] border-2 ${item.color} hover:scale-105 transition-transform duration-300`}>
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Meet the Team (Static Placeholder) */}
      <section className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-20 blur-[100px]"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
           <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black italic">Driven by Passion.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Behind every order is a team of designers, engineers, and food lovers working around the clock to make your dining experience perfect. 
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all active:scale-95">
                Join Our Team
              </button>
           </div>
           <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="h-48 rounded-2xl animate-pulse">
             <img src="https://i.ibb.co.com/wFWtv8T6/istockphoto-2235844377-2048x2048.webp" alt="" />
              </div>
              <div className="h-48 rounded-2xl animate-pulse mt-8">
                <img src="https://i.ibb.co.com/6czdr2gB/istockphoto-1296986175-612x612.webp" alt="" />
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;