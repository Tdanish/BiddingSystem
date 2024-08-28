import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import TH from "./TH.png";

const Navbar = () => {
  return (
    <nav className="bg-[#52B5B5] p-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <Link to="/">
            <img src={TH} alt="" className="h-12 w-12" />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="space-x-10 flex  items-center">
          <Link to="/home" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/listItem" className="text-white hover:text-gray-200">
            My Listing
          </Link>
          <Link to="/addItem" className="text-white hover:text-gray-200">
            Add Item
          </Link>
          <Link
            to="/notifications"
            className="text-white hover:text-gray-200  "
          >
            <MdOutlineNotifications className=" text-2xl " />
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-200">
            <button className="bg-[#ff8749] p-1 px-2 border border-white rounded-full hover:bg-[#f6651a] ">
              Logout
            </button>
          </Link>
          <Link to="/logout" className="text-white hover:text-gray-200">
            <button className="bg-[#ff8749] p-1 px-2 border border-white rounded-full hover:bg-[#f6651a]">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
