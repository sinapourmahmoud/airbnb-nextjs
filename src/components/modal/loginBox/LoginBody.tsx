"use client";
import React, { useContext } from "react";
import LoginController from "./LoginController";
import { FrontContext } from "@/context/ToogleContext";
import { useRouter } from "next/navigation";
import ModaltitleBox from "../ModaltitleBox";
interface Props {
  title: string;
  subtitle: string;
}
const LoginBody: React.FC<Props> = ({ title, subtitle }) => {
  let router = useRouter();
  let { toggle, setToggle } = useContext(FrontContext);
  return (
    <>
      <ModaltitleBox title={title} subtitle={subtitle} />

      <LoginController setToggle={setToggle} router={router} />
    </>
  );
};

export default LoginBody;
