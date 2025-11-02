import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-100">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-md mb-3">
            <span className="text-3xl text-white font-bold">🍱</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800">CanteenK</h1>
          <p className="text-sm text-gray-500 mt-1">
            Delicious meals, just a click away!
          </p>
        </div>

        {/* Login Form */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Welcome back 👋
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Login to order your favorite meals
        </p>
        <form className="space-y-4">
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Email or mobile"
          />
          <input
            type="password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Skip Link */}
        <div className="text-sm text-center">
          <Link
            to="/menu"
            className="text-orange-600 font-medium hover:underline"
          >
            Skip & browse menu
          </Link>
        </div>
      </div>
    </div>
  );
}
