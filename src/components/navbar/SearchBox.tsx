"use clinet";
import React from "react";
const SearchBox: React.FC = () => {
  return (
    <div className="h-full  flex-1   lg:flex-[0.42] hover:shadow-md transition-all duration-300 rounded-full pl-4   flex items-center border  justify-between">
      <div className="h-full w-full flex items-center justify-between flex-1 py-2 lg:py-3 pr-6">
        <a href="#" className="text-[15px] font-semibold">
          Anywhere
        </a>
        <a href="#" className="text-[15px] font-semibold hidden lg:block">
          Anyweek
        </a>
        <a
          href="#"
          className="text-[14px] text-gray-800 font-medium hidden lg:block border-l pl-7"
        >
          Add Guests
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9 text-white cursor-pointer bg-rose-500 rounded-full p-1"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
