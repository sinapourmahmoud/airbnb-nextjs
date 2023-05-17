"use clinet";
import React, { Dispatch, SetStateAction, useContext } from "react";
import NavItem from "./NavItem";
import { FrontContext } from "@/context/ToogleContext";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
interface Props {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  currentUser?: User | null;
}
const NavItems: React.FC<Props> = ({ isToggle, setIsToggle, currentUser }) => {
  let router = useRouter();
  let { setToggle } = useContext(FrontContext);
  return (
    <div
      className={`translate duration-300 absolute  top-16 right-10 bg-white shadow-lg w-2/6 h-auto flex flex-col  lg:w-2/12 max-w-[250px] rounded-lg ${
        isToggle ? "opacity-100 translate-y-0" : "translate-y-20 opacity-0"
      }`}
    >
      {currentUser ? (
        <>
          <NavItem label="My trips" onClick={() => router.push("/trips")} />
          <NavItem
            label="My favorites"
            onClick={() => router.push("/favorites")}
          />
          <NavItem
            label="My reservations"
            onClick={() => router.push("/reservations")}
          />
          <NavItem
            label="My properties"
            onClick={() => router.push("/properties")}
          />
          <NavItem
            label="Airbnb your home"
            onClick={() => setToggle("airebnb-home")}
          />
          <NavItem label="Logout" onClick={() => signOut()} />
        </>
      ) : (
        <>
          <NavItem
            label="Signup"
            onClick={() => {
              setToggle("signup");
            }}
          />
          <NavItem
            label="Login"
            onClick={() => {
              setToggle("login");
            }}
          />
        </>
      )}
    </div>
  );
};

export default NavItems;
