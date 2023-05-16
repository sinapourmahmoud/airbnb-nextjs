"use clinet";
import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width={80}
      height={80}
      className="object-contain"
    />
  );
};

export default Logo;
