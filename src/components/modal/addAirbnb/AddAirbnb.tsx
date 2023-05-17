"use client";
import React, { useContext } from "react";
import Modal from "../Modal";
import { FrontContext } from "@/context/ToogleContext";
import AirbnbBody from "./AirbnbBody";

const AddAirbnb: React.FC = () => {
  let { toggle, setToggle } = useContext(FrontContext);
  if (toggle !== "airebnb-home") return null;
  return (
    <>
      <Modal
        onClose={() => {
          setToggle("");
        }}
        onSubmit={() => {}}
        title="Airbnb your home"
        body={<AirbnbBody />}
        isOpen={true}
        footer={<></>}
      />
    </>
  );
};

export default AddAirbnb;
