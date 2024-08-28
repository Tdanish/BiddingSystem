import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const AddItem = ({ onSubmit }) => {
  const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    itemName: "",
    category: "vehicle",
    description: "",
    startingPrice: "",
    location: "",
    delivery: "available",
    deliveryRadius: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    for (let i = 0; i < image.length; i++) {
      formdata.append("itemImages", image[i]);
    }
    const currentTime = new Date();
    const getCurrentHour = currentTime.getHours();
    if (getCurrentHour >= 9 && getCurrentHour <= 21) {
      formdata.append("availableForBidding", "available");
    } else {
      formdata.append("availableForBidding", "notAvailable");
    }
    onSubmit(formdata);

    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Transition
        show={!submitted}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-8 mx-4 bg-white rounded-lg shadow-lg md:p-12 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900">Post Your Item</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter item name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="vehicle">Vehicle</option>
                <option value="clothing">Clothing</option>
                <option value="collectable">Collectable</option>
                <option value="suite">Suite</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Enter item description"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Starting Price
              </label>
              <input
                type="number"
                name="startingPrice"
                value={formData.startingPrice}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter starting price"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery
            </label>
            <div className="flex items-center mt-2 space-x-4">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="delivery"
                  value="available"
                  checked={formData.delivery === "available"}
                  onChange={handleChange}
                  className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <span className="ml-2">Available</span>
              </label>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="delivery"
                  value="not-available"
                  checked={formData.delivery === "not-available"}
                  onChange={handleChange}
                  className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <span className="ml-2">Not Available</span>
              </label>
            </div>
          </div>

          {formData.delivery === "available" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delivery Radius (in km)
              </label>
              <input
                type="number"
                name="deliveryRadius"
                value={formData.deliveryRadius}
                onChange={handleChange}
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter delivery radius"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Images
            </label>
            <input
              type="file"
              name="itemImages"
              onChange={handleFileChange}
              multiple
              className="block w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </Transition>

      <Transition
        show={submitted}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h3 className="text-3xl font-bold text-gray-900">Thank You!</h3>
          <p className="mt-4 text-lg text-gray-700">
            Your item has been submitted successfully.
          </p>
        </div>
      </Transition>
    </div>
  );
};

export default AddItem;
