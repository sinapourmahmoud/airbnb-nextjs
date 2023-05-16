import React, { useContext } from "react";
import LoginController from "./LoginController";
import { FrontContext } from "@/context/ToogleContext";
interface Props {
  title: string;
  subtitle: string;
}
const LoginBody: React.FC<Props> = ({ title, subtitle }) => {
  let { toggle, setToggle } = useContext(FrontContext);
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-neutral-400 text-sm font-medium">{subtitle}</span>
      </div>
      <LoginController setToggle={setToggle} />
    </>
  );
};

export default LoginBody;
