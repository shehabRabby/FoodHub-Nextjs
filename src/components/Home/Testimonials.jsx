import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What Our <span className="text-green-600">Foodies</span> Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-600 relative">
            "The food arrived hot and the packaging was eco-friendly. Definitely my new go-to app!"
            <div className="mt-6 font-bold text-gray-900 not-italic">— Sarah J.</div>
          </div>
        ))}
      </div>
    </div>
  </section>
    );
};

export default Testimonials;