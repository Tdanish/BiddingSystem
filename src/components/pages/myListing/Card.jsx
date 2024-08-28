import React from "react";

const Card = ({ data }) => {
  let itemImages = [];
  try {
    if (data.itemImages) {
      itemImages = JSON.parse(data.itemImages);
    }
    console.log(itemImages[0]);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="max-w- mx-auto  bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl sm:max-w-48 md:max-w-md lg:max-w-lg">
      <div className="relative p-4">
        <span className="absolute left-0 top-[50%] bg-blue-500 text-white font-bold text-lg py-1 px-3 rounded-br-lg transform -translate-y-1/2 -translate-x-1/2 animate-bounce md:text-xl lg:text-2xl">
          RS.2000
        </span>
        <img
          src={itemImages[0]}
          alt="image"
          className="w-full h-48 object-cover rounded-lg md:h-56 lg:h-64"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
          Shoes
        </h2>
        <p className="text-gray-600 md:text-lg lg:text-xl">Clothing</p>
      </div>
    </div>
  );
};

export default Card;
