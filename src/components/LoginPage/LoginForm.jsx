"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // 1. Credentials
    const MOCK_EMAIL = "foodhub@gmail.com";
    const MOCK_PASS = "foodhub";

    if (email === MOCK_EMAIL && password === MOCK_PASS) {
      toast.success("Login Successful! Welcome to FoodHub 🍔", {
        duration: 3000,
        icon: '🔥',
      });

      // 3. Store in Cookies
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      Cookies.set("userEmail", email, { expires: 1 });

      // 4. Redirect after a short delay
      setTimeout(() => {
        router.push("/food");
        router.refresh();
      }, 1000);
    } else {
      setError("Invalid email or password. Hint: foodhub");
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 mb-12">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
        
        {/* Error Message Section */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-xl">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-7">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest ml-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-5 flex items-center text-gray-400">
                ✉️
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="foodhub@gmail.com"
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-2">
              <label className="text-sm font-black text-gray-700 uppercase tracking-widest">
                Password
              </label>
              <button type="button" className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-5 flex items-center text-gray-400">
                🔒
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-100 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3"
          >
            Sign In To FoodHub
            <span className="text-xl">➔</span>
          </button>

          {/* --- Google Login Section --- */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full border-2 border-gray-100 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all font-bold text-gray-700 group"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google.svg"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              alt="Google"
            />
            Google Account
          </button>


        </form>
      </div>
    </div>
  );
};

export default LoginForm;