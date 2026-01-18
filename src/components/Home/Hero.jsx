import React from 'react';

const Hero = () => {
    return (
<section className="flex flex-col md:flex-row items-center justify-between py-10 md:py-20 gap-10">
    <div className="flex-1 space-y-6">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
        Fresh Food <br /> <span className="text-red-500">Delivered</span> To <br /> <span className="text-green-600">Your Door.</span>
      </h1>
      <p className="text-gray-600 text-lg">Order your favorite meals from local restaurants and enjoy a fresh dining experience at home.</p>
      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition">Order Now</button>
        <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition">View Menu</button>
      </div>
    </div>
    <div className="flex-1">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Delicious Food" className="rounded-3xl shadow-2xl" />
    </div>
  </section>
    );
};

export default Hero;