import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-y border-gray-100">
        {[
          { l: "150+", t: "Restaurants" },
          { l: "30k+", t: "Happy Customers" },
          { l: "50+", t: "Cities" },
          { l: "4.9", t: "Average Rating" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl font-bold text-green-600">{s.l}</h3>
            <p className="text-gray-500 text-sm">{s.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
