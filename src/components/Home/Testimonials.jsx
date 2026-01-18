import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The food arrived hot and the packaging was eco-friendly. Definitely my new go-to app for weekend cravings!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Tuan",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The delivery was faster than expected! The spicy burger was actually spicy and fresh. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anika Rahman",
    role: "Local Guide",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Best UI experience. Ordering is seamless and the variety of categories makes it easy to choose what to eat.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#F6FBF8] -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Decorative background icon */}
      <div className="absolute top-10 right-10 text-green-100 rotate-12 -z-0">
        <svg width="120" height="120" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 7.55228 14.0171 7V4C14.0171 3.44772 14.4648 3 15.0171 3H20.0171C21.1217 3 22.0171 3.89543 22.0171 5V15C22.0171 18.3137 19.3308 21 16.0171 21H14.0171ZM2.01709 21L2.01709 18C2.01709 16.8954 2.91252 16 4.01712 16H7.01712C7.5694 16 8.01712 15.5523 8.01712 15V9C8.01712 8.44772 7.5694 8 7.01712 8H3.01712C2.46484 8 2.01712 7.55228 2.01712 7V4C2.01712 3.44772 2.46484 3 3.01712 3H8.01712C9.12169 3 10.0171 3.89543 10.0171 5V15C10.0171 18.3137 7.33082 21 4.01712 21H2.01709Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            What Our <span className="text-green-600">Foodies</span> Say
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < rev.rating ? "text-yellow-400" : "text-gray-200"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                {rev.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium tracking-wide">
                    {rev.role}
                  </p>
                </div>
                <div className="ml-auto text-red-100 group-hover:text-red-400 transition-colors">
                  ♥
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
