import React from "react";
import { Link } from "react-router-dom";

const DescriptionCard = () => {
  return (
    <>
      <div class=" w-[80%] mx-auto text-center mt-12  space-y-5  p-6 bg-gradient-to-r from-[#244f4f] to-[#52d5b5] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5
            class="mb-2 text-6xl   text-[#008080] font-extrabold dark:text-white"
            style={{
              WebkitTextStroke: "1px white",
              textStroke: "1px white",
            }}
          >
            Thrift Heaven
          </h5>
        </a>
        <p class="mb-3 font-semibold text-3xl text-white dark:text-white">
          Turn your item into cash - Start Selling Today!
        </p>
        <p className="mb-3 font-normal text-xl text-white">
          Reach millons of buyers and maximize your profits with our seemless
          auction process.
        </p>
        <Link class="inline-flex items-center  py-2 text-sm font-medium text-center text-white bg-[#ff8749] p-1 px-2 border border-white rounded-full hover:bg-[#f6651a]">
          Start Selling
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default DescriptionCard;
