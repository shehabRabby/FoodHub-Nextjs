import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-20 h-20 bg-red-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon & Heading */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-3xl mb-6 transform rotate-12">
          <span className="text-3xl">📩</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Stay Hungry for <span className="text-red-500">Deals!</span>
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join <span className="text-green-600 font-bold">5,000+ foodies</span> and get exclusive 
          coupons & weekly restaurant alerts delivered to your inbox.
        </p>

        {/* Modern Form Layout */}
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="flex-grow flex items-center px-4 w-full">
              <svg 
                className="w-5 h-5 text-gray-400 mr-3" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-3 text-gray-700 bg-transparent focus:outline-none placeholder:text-gray-400 font-medium"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full sm:w-auto bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 active:scale-95 flex items-center justify-center gap-2"
            >
              Subscribe
              <span>🚀</span>
            </button>
          </form>
          
          <p className="mt-4 text-xs text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;