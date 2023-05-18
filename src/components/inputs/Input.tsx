import React from "react";
import { Field, ErrorMessage } from "formik";
import { IconType } from "react-icons/lib";

interface Props {
  name: string;
  type: string;
  labelName: string;
  icon?: IconType;
}
const Input: React.FC<Props> = ({ name, type, labelName, icon: Icon }) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          fontSize={20}
          className="text-black absolute top-[50%] left-1 -translate-y-[50%]"
        />
      )}
      <Field
        type={type}
        name={name}
        className={`peer w-full h-14 px-3 pt-5 rounded-lg  border border-neutral-400 outline-none focus:border-2 ${
          Icon && "px-5"
        }`}
      />
      <label
        className={`${
          Icon && "translate-x-5"
        } absolute peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 transition-all  duration-300 peer-focus:scale-50 scale-90  top-5 left-2 text-sm pointer-events-none font-light `}
      >
        {labelName}
      </label>

      <ErrorMessage
        name={name}
        render={(msg) => <div className="text-rose-500">{msg}</div>}
      />
    </div>
  );
};

export default Input;
