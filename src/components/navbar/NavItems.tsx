"use clinet";
import React, { Dispatch, SetStateAction, useContext } from "react";
import NavItem from "./NavItem";
import { FrontContext } from "@/context/ToogleContext";
interface Props {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}
const NavItems: React.FC<Props> = ({ isToggle, setIsToggle }) => {
  let { setToggle } = useContext(FrontContext);
  return (
    <div
      className={`translate duration-300 absolute  top-16 right-10 bg-white shadow-lg w-2/6 h-auto flex flex-col  lg:w-2/12 max-w-[250px] rounded-lg ${
        isToggle ? "opacity-100 translate-y-0" : "translate-y-20 opacity-0"
      }`}
    >
      <NavItem
        label="Signup"
        onClick={() => {
          setToggle("signup");
        }}
      />
      <NavItem label="Login" onClick={() => setToggle("login")} />
    </div>
  );
};

export default NavItems;
