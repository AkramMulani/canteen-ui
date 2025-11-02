import React from "react";
import { Link } from "react-router-dom";

export default function FoodCard({ item }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Food Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={item.image || "https://via.placeholder.com/400x300"}
          alt={item.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.short || "Tasty and fresh"}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-orange-600 font-semibold text-lg">₹{item.price}</span>
          <Link
            to={`/menu/${item.id}`}
            className="text-sm font-medium text-amber-600 hover:underline"
          >
            View
          </Link>
        </div>

        <button className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:opacity-90 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}
