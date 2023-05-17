"use client";
import { FrontContext } from "@/context/ToogleContext";
import React, { useContext } from "react";
import Modal from "../Modal";
import LoginBody from "./LoginBody";
import RegisterFooter from "../registerBox/RegisterFooter";
interface Props {}
const LoginModal: React.FC<Props> = () => {
  let { toggle, setToggle } = useContext(FrontContext);
  if (toggle !== "login") return null;
  return (
    <>
      <Modal
        onClose={() => {
          setToggle("");
        }}
        onSubmit={() => {}}
        title="Login"
        body={
          <LoginBody title="Welcome back" subtitle="Login to your account" />
        }
        isOpen={true}
        footer={<RegisterFooter fromLogin />}
      />
    </>
  );
};

export default LoginModal;
