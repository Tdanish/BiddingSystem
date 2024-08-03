import React from "react";
import ShakeHand from "./ShakeHand.png";
import { Link } from "react-router-dom";
const RoleSelector = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex flex-col gap-y-4  justify-center items-center ml-auto mr-auto">
        <div>
          <h1 className="text-[4rem]">Can You Tell Me About Yourself?</h1>
        </div>
        <div className="flex flex-col gap-8 mt-6 ">
          <Link to="/login?role=bidder">
            <button className="bg-[#486e36] p-4  rounded-full w-72 text-white text-[2rem] ">
              Bidder
            </button>
          </Link>
          <hr className="text-black h-5 border-gray-500 " />

          <Link to="/login?role=seller">
            <button className="bg-[#052337] p-4 rounded-full w-72 text-white text-[2rem]">
              Seller
            </button>
          </Link>
        </div>
        <div className="">
          <img width="698px" height="335px" src={ShakeHand} alt="" />
        </div>
      </div>
    </>
  );
};

export default RoleSelector;
