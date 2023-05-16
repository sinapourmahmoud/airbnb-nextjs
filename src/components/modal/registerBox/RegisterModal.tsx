"use client";
import React, { ReactElement, useContext } from "react";
import { FrontContext } from "@/context/ToogleContext";
import Modal from "../Modal";
import RegisterBody from "./RegisterBody";
import RegisterFooter from "./RegisterFooter";

const RegisterModal: React.FC = () => {
  let { toggle, setToggle } = useContext(FrontContext);
  if (toggle !== "signup") return;
  return (
    <>
      <Modal
        onClose={() => {
          setToggle("");
        }}
        onSubmit={() => {}}
        title="Register"
        body={
          <RegisterBody
            title="Wellcome to Airebnb "
            subtitle="Create account"
          />
        }
        isOpen={true}
        footer={<RegisterFooter />}
      />
    </>
  );
};

export default RegisterModal;
