import React from "react";
import Navbar from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";

const SinglePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <img src="abcd" alt="Item" className="w-full h-64 object-cover" />
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &gt;
          </button>
        </div>

        {/* Description Container */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Item Name</h2>
          <p className="text-gray-600 mb-4">Seller: John Doe</p>
          <p className="text-gray-600 mb-4">Price: $200</p>
          <p className="text-gray-600 mb-4">
            Description: This is a brief description of the item.
          </p>
          <p className="text-gray-600 mb-4">Shipping Date: 2024-09-05</p>

          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Bidders
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Edit Listing
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Relaunch Auction
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePage;
