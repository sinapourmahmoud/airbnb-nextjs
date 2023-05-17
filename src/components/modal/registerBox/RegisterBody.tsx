"use client";
import React, { useContext } from "react";
import RegisterController from "./RegisterController";
import { FrontContext } from "@/context/ToogleContext";
interface Props {
  title: string;
  subtitle: string;
}
const RegisterBody: React.FC<Props> = ({ title, subtitle }) => {
  let { setToggle } = useContext(FrontContext);
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-neutral-400 text-sm font-medium">{subtitle}</span>
      </div>
      <RegisterController setToggle={setToggle} />
    </>
  );
};

export default RegisterBody;
