import React from 'react';

export const PublicPlace = props => {
  return (
    <div class=" m-3 relative flex flex-col md:flex-row sm:space-x-1 space-y-1 md:space-y-0 rounded-xl shadow-lg p-1 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div class="w-full md:w-1/4 bg-white grid place-items-left">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=150"
          alt="tailwind logo"
          class="rounded-xl"
        />
      </div>
      <div class="w-full md:w-3/4 bg-white flex flex-col space-y-0 pr-1">
        <div class="flex justify-between item-center">
          <p class="text-gray-500 font-small mb-0 hidden text-sm md:block">Public</p>
          <div class="text-gray-500 font-small hidden text-sm md:block">User</div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h3 class="ml-0 p-1 flex-1 font-black text-gray-800 md:text-xl mt-0 text-base">
          The Majestic and Wonderful Bahamas
        </h3>
        <p class=" flex-2 md:text-sm text-gray-500 text-base">
          The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16
          major islands, The Bahamas is an unmatched destination
        </p>
        <p class="flex-1 mt-1 text-md font-black text-gray-800">
          $110
          <span class="font-normal text-gray-600 text-base">/night</span>
        </p>
      </div>
    </div>
  );
};
