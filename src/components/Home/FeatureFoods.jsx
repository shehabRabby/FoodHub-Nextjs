import React from 'react';

const FeatureFoods = () => {
    return (
        <div>
            <section className="py-10">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-3xl font-bold">Must <span className="text-green-600">Try</span> This Week</h2>
        <p className="text-gray-500">Handpicked favorites by our top chefs</p>
      </div>
      <button className="text-red-500 font-bold hover:underline">View All</button>
    </div>
    {/* Grid mapping your FoodCard component here */}
  </section>
        </div>
    );
};

export default FeatureFoods;