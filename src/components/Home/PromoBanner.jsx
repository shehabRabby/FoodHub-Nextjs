import React from "react";

const PromoBanner = () => {
  return (
    <section className="relative my-16 overflow-hidden rounded-[2.5rem] bg-red-600 shadow-2xl shadow-red-200">
      
      {/* Decorative Background Shapes */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-500 opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-500 opacity-20 blur-[100px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-8 md:flex-row md:p-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/30">
            Limited Time Offer
          </div>
          
          <h2 className="text-4xl font-black italic leading-tight text-white md:text-6xl">
            Save up to <span className="text-yellow-300 drop-shadow-md">50%</span> OFF!
          </h2>
          
          <p className="max-w-md text-lg text-red-50 md:text-xl font-medium opacity-90">
            Hungry? Order your first meal and get a massive discount. 
            Use code at checkout:
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <div className="group relative">
              <span className="relative z-10 block rounded-xl border-2 border-dashed border-white bg-white/10 px-6 py-3 font-mono text-2xl font-bold text-white transition-all group-hover:bg-white group-hover:text-red-600">
                FOODHUB50
              </span>
            </div>
            
            <button className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition-all hover:bg-green-700 hover:scale-105 active:scale-95 shadow-xl">
              Claim Offer Now
            </button>
          </div>
        </div>

        {/* Adjusted Image Container */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* The "Spotlight" background for the non-transparent image */}
          <div className="absolute h-64 w-64 md:h-80 md:w-80 bg-white rounded-full blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative group overflow-hidden rounded-full border-[8px] border-white/20 shadow-2xl w-64 h-64 md:w-96 md:h-96 animate-bounce-slow">
            <img
              src="https://i.ibb.co.com/hp1pv3S/istockphoto-1074255410-612x612.webp"
              alt="Delicious Burger and Pizza"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Soft overlay to blend image edges */}
            <div className="absolute inset-0 ring-inset ring-[20px] ring-white/10 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;