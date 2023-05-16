"use clinet";
import React from "react";
import BoxContainer from "./../BoxContainer";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import UserBar from "./UserBar";

const Nav: React.FC = () => {
  return (
    <header className="w-full bg-white border-b-2 h-[70px] py-2 flex items-center">
      <BoxContainer>
        <>
          <div className="flex items-center justify-between gap-5 h-full">
            <Logo />
            <SearchBox />
            <UserBar />
          </div>
        </>
      </BoxContainer>
    </header>
  );
};

export default Nav;
