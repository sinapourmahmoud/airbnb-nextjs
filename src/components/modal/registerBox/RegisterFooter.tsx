"use client";
import Button from "@/components/Button";
import React from "react";
import { signIn } from "next-auth/react";
interface Props {
  fromLogin?: boolean;
}
const RegisterFooter: React.FC<Props> = ({ fromLogin }) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        clicked={() => {
          signIn("google");
        }}
        label={fromLogin ? "Login with Google" : `Signup with Google`}
        small
        outline
      />
      <Button
        clicked={() => {
          signIn("github");
        }}
        label={fromLogin ? "Login with Github" : `Signup with Github`}
        small
        outline
      />
    </div>
  );
};

export default RegisterFooter;
