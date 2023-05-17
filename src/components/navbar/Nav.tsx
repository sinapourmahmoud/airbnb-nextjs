"use clinet";
import React, { useState } from "react";
import BoxContainer from "./../BoxContainer";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import UserBar from "./UserBar";
import { User } from "@prisma/client";
interface Props {
  currentUser?: User | null;
}
const Nav: React.FC<Props> = ({ currentUser }) => {
  return (
    <header className="w-full bg-white border-b-2 h-[70px] py-2 flex items-center">
      <BoxContainer>
        <>
          <div className="flex items-center justify-between gap-5 h-full">
            <Logo />
            <SearchBox />
            <UserBar currentUser={currentUser} />
          </div>
        </>
      </BoxContainer>
    </header>
  );
};

export default Nav;
