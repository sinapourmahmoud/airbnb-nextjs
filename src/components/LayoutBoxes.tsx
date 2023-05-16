"use client";
import Context from "@/context/ToogleContext";
import React, { ReactNode } from "react";
import Nav from "./navbar/Nav";
import Modal from "./modal/Modal";
import RegisterModal from "./modal/registerBox/RegisterModal";
import LoginModal from "./modal/loginBox/LoginModal";
interface Props {}
const LayoutBoxes: React.FC<Props> = () => {
  return (
    <Context>
      <>
        <RegisterModal></RegisterModal>
        <LoginModal></LoginModal>
        <Nav />
      </>
    </Context>
  );
};

export default LayoutBoxes;
