import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
      <div className="w-full h-44 bg-gray-200" />

      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />

        <div className="flex items-center justify-between mt-4">
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-9 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
