import React from "react";

const FoodMenuHeader = () => {
  return (
    <div className="relative w-full mb-12 overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50 -ml-16 -mb-16"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        <div className="text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Our Restaurant Menu</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Discover the <span className="text-green-600">Best Food</span> <br /> 
            Around <span className="text-red-500 italic">You.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto md:mx-0">
            From sizzling steaks to fresh salads, explore our wide range of 
            culinary delights prepared by top-rated chefs.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Soft shadow glow */}
            <div className="absolute inset-0 bg-green-200 blur-2xl rounded-full scale-75 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop" 
              alt="Fresh Salad bowl" 
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl"
            />
            {/* Floating small badge */}
            <div className="absolute -bottom-2 -left-2 z-20 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Freshly Made</p>
                <p className="text-sm font-black text-gray-800">Chefs Choice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuHeader;