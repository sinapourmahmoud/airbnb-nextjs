"use clinet";
import React, { useState } from "react";
import NavItems from "./NavItems";

const UserBar: React.FC = () => {
  let [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <>
      <div className="flex  items-center gap-5 rounded-full ">
        <a href="#" className="text-[16px] font-bold hidden lg:block">
          Airebnb your home
        </a>
        <div
          onClick={() => {
            setIsToggle((prev) => !prev);
          }}
          className="border hover:shadow-md cursor-pointer h-full p-2 lg:py-1 rounded-full flex items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <img
            src="/images/placeholder.jpg"
            alt="avatar"
            className="w-8 h-8 rounded-full hidden lg:block"
          />
        </div>
      </div>
      <NavItems isToggle={isToggle} setIsToggle={setIsToggle} />
    </>
  );
};

export default UserBar;
