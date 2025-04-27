import React, { useState } from "react";
import { MessageSquare, Star, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function ReStyleApp() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800">ReStyle</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl">
          Profile
        </button>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Upload Clothing</h2>
            <input
              type="text"
              placeholder="Item Name"
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Category (e.g. Shirt, Pants)"
              className="border p-2 rounded w-full mb-2"
            />
            <input type="file" className="border p-2 rounded w-full mb-2" />
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl">
              Upload
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Browse Swaps</h2>
            <div className="flex gap-2 flex-wrap">
              {["All", "Shirts", "Pants", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  className={`border px-3 py-1 rounded-xl ${
                    selectedCategory === cat ? "bg-green-600 text-white" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="mt-4 font-medium">
              Selected Category: {selectedCategory}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Available Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/random/300x300?clothing&sig=${item}`}
                  alt="Clothing Item"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Item Name</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="border rounded-full px-3 py-1 text-sm">
                      Size M
                    </span>
                    <span className="border rounded-full px-3 py-1 text-sm">
                      Shirt
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl">
                    Request Swap
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          <button className="border px-4 py-2 flex items-center gap-2 rounded-xl">
            <MessageSquare size={16} /> Chat
          </button>
          <button className="border px-4 py-2 flex items-center gap-2 rounded-xl">
            <Star size={16} /> Badges
          </button>
          <button className="border px-4 py-2 flex items-center gap-2 rounded-xl">
            <Leaf size={16} /> Impact Tracker
          </button>
        </div>
      </motion.div>
    </div>
  );
}
