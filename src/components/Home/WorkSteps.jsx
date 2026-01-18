import React from "react";

const steps = [
  {
    t: "Easy to Order",
    p: "Browse our extensive menu and place your order with just a few taps.",
    i: "📱",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    t: "Fastest Delivery",
    p: "Our dedicated riders ensure your food arrives hot and fresh in record time.",
    i: "🛵",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    t: "Best Quality",
    p: "We partner with top-rated chefs who maintain elite food safety standards.",
    i: "🥗",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
];

const WorkSteps = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-5">
        <h2 className="text-[15rem] font-black text-green-700 select-none">FOOD</h2>
      </div>

      <div className="text-center mb-16">
        <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Process</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          How We <span className="text-green-600 italic">Serve</span> You
        </h2>
        <div className="h-1.5 w-20 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
        {/* Decorative Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-200 -z-10"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="group relative text-center px-6 transition-all duration-300">
            {/* Step Number Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-green-600 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
              0{idx + 1}
            </div>

            {/* Icon Container */}
            <div className={`relative w-24 h-24 ${step.color} rounded-3xl mx-auto mb-8 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] shadow-sm group-hover:shadow-xl`}>
              <span className="text-5xl">{step.i}</span>
              
              {/* Subtle pulsing ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-green-200 animate-ping opacity-0 group-hover:opacity-20"></div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
              {step.t}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto text-sm md:text-base">
              {step.p}
            </p>

            {/* Bottom Glow */}
            <div className="mt-8 h-1 w-0 bg-green-600 mx-auto transition-all duration-500 group-hover:w-full rounded-full opacity-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSteps;