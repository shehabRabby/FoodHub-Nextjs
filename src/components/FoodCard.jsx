import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <Image
        width={400}
        height={200}
        src={food.foodImg}
        alt={food.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 ">{food.title}</h3>

        <p className="text-sm text-gray-500">{food.category}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold text-green-600">৳{food.price}</span>

          <Link href={`/food/${food.id}`} className="btn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
