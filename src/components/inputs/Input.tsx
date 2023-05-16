import React from "react";
import { Field, ErrorMessage } from "formik";
interface Props {
  name: string;
  type: string;
  labelName: string;
}
const Input: React.FC<Props> = ({ name, type, labelName }) => {
  return (
    <div className="relative">
      <Field
        type={type}
        name={name}
        className="peer w-full h-14 px-3 pt-5 rounded-lg  border border-neutral-400 outline-none focus:border-2"
      />
      <label
        className={`absolute peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 transition-all duration-300 peer-focus:scale-50 scale-90  top-5 left-2 text-sm pointer-events-none font-light `}
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
