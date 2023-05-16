import Button from "@/components/Button";
import React from "react";
interface Props {
  fromLogin?: boolean;
}
const RegisterFooter: React.FC<Props> = ({ fromLogin }) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        label={fromLogin ? "Login with Google" : `Signup with Google`}
        small
        outline
      />
      <Button
        label={fromLogin ? "Login with Github" : `Signup with Github`}
        small
        outline
      />
    </div>
  );
};

export default RegisterFooter;
