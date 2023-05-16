"use clinet";
import React, { useState } from "react";
interface Props {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  body: React.ReactElement;
  footer: React.ReactElement;
  isOpen?: boolean;
}
const Modal: React.FC<Props> = ({
  onClose,
  onSubmit,
  footer,
  isOpen,
  title,
  body,
}) => {
  let [show, setShow] = useState(isOpen);
  const closeModal = () => {
    onClose();
  };
  const submitModal = () => {
    onSubmit();
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div
        className={`translate tranisation-all duration-300 w-full h-full sm:w-3/4 md:w-2/4 sm:h-auto lg:w-5/12 bg-white p-3 px-4 lg:px-5 sm:rounded-lg flex flex-col gap-4 ${
          show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-50"
        }`}
      >
        {/*Content */}
        <div className="flex items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 cursor-pointer"
            onClick={closeModal}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex items-center justify-center flex-1">
            <p className="text-base font-bold">{title}</p>
          </div>
        </div>

        <div>{body}</div>
        <div>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
