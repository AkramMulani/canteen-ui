import React from "react";
import FoodCard from "../components/FoodCard";

export default function Menu({ menu = [] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              🍽️ Today's Menu
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Pick your meal and enjoy freshness every bite!
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <input
              placeholder="Search your dish..."
              className="p-3 w-48 sm:w-60 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm"
            />
            <select className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm">
              <option>All</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Beverages</option>
              <option>Desserts</option>
            </select>
          </div>
        </header>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menu.length > 0 ? (
            menu.map((item) => <FoodCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-3">🍔</div>
              <p className="text-gray-600 text-lg font-medium">
                No items found!
              </p>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}