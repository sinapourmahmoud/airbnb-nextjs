"use client";
import React from "react";
interface Props {
  label: string;
  outline?: boolean;
  small?: boolean;
  disabled?: boolean;
  clicked?: () => void;
}
const Button: React.FC<Props> = ({
  label,
  outline,
  small,
  disabled,
  clicked,
}) => {
  return (
    <button
      onClick={clicked}
      disabled={disabled}
      type="submit"
      className={`   font-semibold   rounded-lg disabled:cursor-not-allowed w-full ${
        outline
          ? "bg-white border-2 border-black disabled:text-neutral-400 disabled:border-neutral-400"
          : "text-white bg-rose-500 border-none disabled:bg-rose-400"
      } ${small ? "py-2 text-sm" : " py-3 text-base"}`}
    >
      {label}
    </button>
  );
};

export default Button;
