"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { withFormik, FormikProps, Form, Field, ErrorMessage } from "formik";
import Input from "@/components/inputs/Input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  return (
    <Form>
      <div className="flex flex-col gap-5 mt-4">
        <Input name="email" labelName="Email" type="email" />
        <Input name="password" labelName="Password" type="password" />
      </div>
      <div className="flex items-center gap-3 mt-5">
        <Button label="Login" />
      </div>
    </Form>
  );
};
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(2).max(255),
  password: Yup.string().required().min(8).max(45),
});
// The type of props MyForm receives
interface MyFormProps {
  email?: string;
  password?: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
  router: any;
}

// Wrap our form with the withFormik HoC
const LoginController = withFormik<MyFormProps, FormValues>({
  validationSchema,
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },

  handleSubmit: (values, { props }) => {
    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        props.setToggle("");
        toast.success("login successful");
        props.router.refresh();
        props.router.push("/");
      } else {
        toast.error("login has error");
      }
    });
  },
})(InnerForm);

export default LoginController;
