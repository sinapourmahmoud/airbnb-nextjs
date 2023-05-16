"use client";
import Context from "@/context/ToogleContext";
import React, { ReactNode } from "react";
import Nav from "./navbar/Nav";
import Modal from "./modal/Modal";
import RegisterModal from "./modal/registerBox/RegisterModal";
import LoginModal from "./modal/loginBox/LoginModal";
import ReactToaster from "./ReactToaster";
interface Props {}
const LayoutBoxes: React.FC<Props> = () => {
  return (
    <Context>
      <>
        <ReactToaster />
        <RegisterModal></RegisterModal>
        <LoginModal></LoginModal>
        <Nav />
      </>
    </Context>
  );
};

export default LayoutBoxes;
