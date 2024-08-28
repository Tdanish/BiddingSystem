import React from "react";

export const Card = ({ text }) => {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          class="rounded-t-lg h-52"
          src="/docs/images/blog/image-1.jpg"
          alt="image"
        />

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {text}
          </h5>
        </div>
      </div>
    </>
  );
};
