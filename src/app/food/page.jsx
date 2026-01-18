import FoodCard from "@/components/FoodCard";
import FoodMenuHeader from "@/components/FoodMehuHearder";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const FoodPage = async () => {
  const foods = await getFoods();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FoodMenuHeader></FoodMenuHeader>

      <div className="flex items-center gap-4 mb-8">
        <h4 className="text-2xl sm:text-3xl font-black text-gray-900">
          Explore <span className="text-red-500">Menu</span>
        </h4>
        <div className="h-px flex-grow bg-gray-100"></div>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
          {foods.length} Items Available
        </span>
      </div>

      <div className="grid my-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
