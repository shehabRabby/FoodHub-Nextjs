import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="py-20 text-center">
        <div className="bg-green-600 rounded-3xl p-10 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Hungry for Deals!</h2>
          <p className="mb-8 opacity-90">
            Join our newsletter to get the latest coupons and new restaurant
            alerts.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
