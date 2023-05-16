import React from "react";
interface Props {
  label: string;
  outline?: boolean;
  small?: boolean;
  disabled?: boolean;
  disabeldText?: string;
}
const Button: React.FC<Props> = ({
  label,
  disabeldText,
  outline,
  small,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`   font-semibold   rounded-lg w-full ${
        outline
          ? "bg-white border-2 border-black"
          : "text-white bg-rose-500 border-none disabled:bg-rose-400"
      } ${small ? "py-2 text-sm" : " py-3 text-base"}`}
    >
      {disabled ? disabeldText : label}
    </button>
  );
};

export default Button;
