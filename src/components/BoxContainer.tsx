"use clinet";
import React, { ReactElement } from "react";
interface Props {
  children: ReactElement;
}
const BoxContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl px-3 md:px-0 mx-auto">{children}</div>
  );
};

export default BoxContainer;
