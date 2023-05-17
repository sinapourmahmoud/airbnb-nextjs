"use client";
import Context from "@/context/ToogleContext";
import React, { ReactNode } from "react";
import Nav from "./navbar/Nav";
import Modal from "./modal/Modal";
import RegisterModal from "./modal/registerBox/RegisterModal";
import LoginModal from "./modal/loginBox/LoginModal";
import ReactToaster from "./ReactToaster";
import { User } from "@prisma/client";
interface Props {
  currentUser?: any;
}
const LayoutBoxes: React.FC<Props> = ({ currentUser }) => {
  return (
    <Context>
      <>
        <ReactToaster />
        <RegisterModal></RegisterModal>
        <LoginModal></LoginModal>
        <Nav currentUser={currentUser} />
      </>
    </Context>
  );
};

export default LayoutBoxes;
