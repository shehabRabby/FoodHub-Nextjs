import Link from "next/link";
import React from "react";

const FeatureFoods = () => {
  const staticData = [
    {
      id: 1,
      name: "Double Cheese Burger",
      price: "250",
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Pepperoni Feast Pizza",
      price: "550",
      tag: "Popular",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Golden French Fries",
      price: "120",
      tag: "Crispy",
      img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Spicy Fried Chicken",
      price: "180",
      tag: "New",
      img: "https://i.ibb.co.com/HLH5T4ht/photo-1765360024320-b2ab819c6f75.avif",
    },
  ];

  return (
    <section className="py-16">
      {/* Simple Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Must <span className="text-green-600">Try</span> This Week
          </h2>
          <p className="text-gray-500 mt-1">Handpicked favorites by our top chefs</p>
        </div>
        <Link href="/food" className="text-red-500 font-bold border-b-2 border-red-500 pb-1 hover:text-red-600 hover:border-red-600 transition">
          View All
        </Link>
      </div>

      {/* Static Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {staticData.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-xl">
            {/* Image Wrapper */}
            <div className="relative h-48 w-full">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                {item.name}
              </h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-black text-gray-900">৳{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureFoods;