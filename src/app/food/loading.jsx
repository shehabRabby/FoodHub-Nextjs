import FoodCardSkeleton from "@/components/Skeletons/FoodCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid my-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
