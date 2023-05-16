import React from "react";
import RegisterController from "./RegisterController";
interface Props {
  title: string;
  subtitle: string;
}
const RegisterBody: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-neutral-400 text-sm font-medium">{subtitle}</span>
      </div>
      <RegisterController />
    </>
  );
};

export default RegisterBody;
