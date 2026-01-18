import React from "react";

const LoginHeader = () => {
  return (
    <div className="relative py-12 text-center overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Icon */}
        <div className="w-20 h-20 bg-white shadow-xl shadow-gray-100 rounded-[2rem] flex items-center justify-center mb-6 border border-gray-50 transform hover:rotate-12 transition-transform duration-300">
          <span className="text-4xl">🔐</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Unlock Your <span className="text-green-600">Cravings</span>
        </h1>
        
        <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
          Welcome back! Please enter your details below to access your 
          <span className="text-red-500 font-bold"> FoodHub</span> dashboard.
        </p>

        {/* Progress/Step Dots (Visual only) */}
        <div className="flex items-center gap-3 mt-8">
          <div className="h-2 w-12 bg-green-600 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      
      {/* Decorative Food Elements (Floating icons) */}
      <div className="hidden lg:block absolute top-10 left-10 text-4xl animate-bounce opacity-40">🍕</div>
      <div className="hidden lg:block absolute bottom-10 right-10 text-4xl animate-bounce opacity-40 [animation-delay:1s]">🍔</div>
    </div>
  );
};

export default LoginHeader;