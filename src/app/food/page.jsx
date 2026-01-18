import FoodCard from "@/components/FoodCard";
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
    <div className="px-4 sm:px-6 lg:px-8">
      <h4 className="text-xl sm:text-2xl font-medium">
        Total foods:
        <span className="text-green-600"> {foods.length}</span>
      </h4>

      <div className="grid my-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
