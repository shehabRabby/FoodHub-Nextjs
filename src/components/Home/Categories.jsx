import React from "react";

const categoryData = [
  { name: "Burger", icon: "🍔", color: "hover:bg-orange-50" },
  { name: "Pizza", icon: "🍕", color: "hover:bg-red-50" },
  { name: "Pasta", icon: "🍝", color: "hover:bg-yellow-50" },
  { name: "Sushi", icon: "🍣", color: "hover:bg-blue-50" },
  { name: "Desserts", icon: "🍰", color: "hover:bg-pink-50" },
  { name: "Drinks", icon: "🍹", color: "hover:bg-cyan-50" },
];

const Categories = () => {
  return (
    <section className="py-12 md:py-20">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-[2px] w-12 bg-green-600 hidden sm:block"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Popular <span className="text-red-500 underline decoration-green-500 underline-offset-8">Categories</span>
        </h2>
        <div className="h-[2px] w-12 bg-green-600 hidden sm:block"></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
        {categoryData.map((cat) => (
          <div
            key={cat.name}
            className={`group relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm 
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                       cursor-pointer overflow-hidden text-center ${cat.color}`}
          >
            {/* Background Accent Circle */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-50 rounded-full group-hover:scale-[3] group-hover:bg-green-600/10 transition-transform duration-500" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-4 flex items-center justify-center 
                            group-hover:bg-green-600 group-hover:rotate-12 transition-all duration-300 shadow-sm">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
              </div>

              {/* Text */}
              <p className="font-bold text-gray-700 group-hover:text-green-700 transition-colors">
                {cat.name}
              </p>
              
              {/* Bottom indicator */}
              <div className="w-0 h-1 bg-red-500 mx-auto mt-2 group-hover:w-8 transition-all duration-300 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;