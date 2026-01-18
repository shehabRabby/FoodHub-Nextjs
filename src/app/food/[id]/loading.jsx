import React from "react";

const loading = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:flex-row md:gap-6 animate-pulse">
      {/* Image placeholder */}
      <div className="bg-gray-200 w-full h-64 md:w-1/2 md:h-80 rounded-lg" />

      {/* Details placeholder */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4" />

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-1/2" />

        {/* Area */}
        <div className="h-4 bg-gray-200 rounded w-2/3" />

        {/* Price */}
        <div className="h-4 bg-gray-200 rounded w-1/3 mt-2" />

        {/* Watch Video Button */}
        <div className="mt-4 h-10 bg-gray-200 rounded w-32" />
      </div>
    </div>
  );
};

export default loading;
