"use client";
import React, { useContext } from "react";
import RegisterController from "./RegisterController";
import { FrontContext } from "@/context/ToogleContext";
import ModaltitleBox from "../ModaltitleBox";
interface Props {
  title: string;
  subtitle: string;
}
const RegisterBody: React.FC<Props> = ({ title, subtitle }) => {
  let { setToggle } = useContext(FrontContext);
  return (
    <>
      <ModaltitleBox title={title} subtitle={subtitle} />
      <RegisterController setToggle={setToggle} />
    </>
  );
};

export default RegisterBody;
