import React from "react";
import Link from "next/link";

const getFoodById = async (id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodById(id);

  if (!food) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-800">Oops! Food not found</h2>
        <Link href="/" className="mt-4 text-green-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-6 text-gray-500">
        <Link href="/" className="hover:text-green-600">Home</Link> / 
        <span className="ml-2 text-gray-900 font-medium">{food.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left: Food Image with Badge */}
        <div className="relative group">
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-700 shadow-sm z-10">
            {food.category}
          </div>
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        {/* Right: Food Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {food.title}
          </h1>
          
          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold text-green-600">৳{food.price}</span>
            <span className="text-sm text-gray-400 line-through">৳{Math.round(food.price * 1.2)}</span>
          </div>

          <div className="mt-6 border-y border-gray-100 py-4 space-y-2">
            <p className="text-gray-600 flex items-center">
              <span className="font-semibold w-24 text-gray-900">Origin:</span> {food.area}
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="font-semibold w-24 text-gray-900">Category:</span> {food.category}
            </p>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Experience the authentic taste of {food.area} with our specially prepared {food.title}. 
            Made with fresh ingredients and traditional spices.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-95">
              Add to Cart
            </button>
            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-700 font-bold py-4 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Watch Recipe</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
             <div className="p-3 bg-orange-50 rounded-lg text-orange-700 text-xs font-medium">🚀 Fast Delivery</div>
             <div className="p-3 bg-blue-50 rounded-lg text-blue-700 text-xs font-medium">🌿 Fresh Food</div>
             <div className="p-3 bg-red-50 rounded-lg text-red-700 text-xs font-medium">⭐ Top Rated</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;