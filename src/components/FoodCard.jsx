import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  return (
<div className="group bg-white rounded-[1rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          width={400}
          height={300}
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Floating Category */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
          {food.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1 group-hover:text-red-500 transition-colors">
            {food.title}
          </h3>
        </div>

        
        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-gray-400 text-xs font-bold">4.8 (120+ Reviews)</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Price</p>
            <span className="text-2xl font-black text-gray-900">
              ৳{food.price}
            </span>
          </div>

          <Link 
            href={`/food/${food.id}`} 
            className="bg-green-600 hover:bg-red-500 text-white p-3 rounded-2xl shadow-lg shadow-green-100 hover:shadow-red-100 transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span className="hidden group-hover:block ml-1 text-sm font-bold pr-2 transition-all">Details</span>
            <svg 
                className="w-5 h-5 group-hover:rotate-45 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
