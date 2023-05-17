"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field, ErrorMessage } from "formik";
import Input from "@/components/inputs/Input";
import Button from "@/components/Button";
import axios from "axios";
import toast from "react-hot-toast";
// Shape of form values
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  return (
    <Form>
      <div className="flex flex-col gap-5 mt-4">
        <Input name="name" labelName="Name" type="text" />

        <Input name="email" labelName="Email" type="email" />
        <Input name="password" labelName="Password" type="password" />
      </div>
      <div className="flex items-center gap-3 mt-5">
        <Button label="Register" />
      </div>
    </Form>
  );
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(255),
  email: Yup.string().email().required().min(2).max(255),
  password: Yup.string().required().min(8).max(45),
});
// The type of props MyForm receives
interface MyFormProps {
  name?: string;
  email?: string;
  password?: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
}

// Wrap our form with the withFormik HoC
const RegisterController = withFormik<MyFormProps, FormValues>({
  validationSchema,
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  handleSubmit: ({ name, email, password }, { props }) => {
    axios
      .post("/api/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        props.setToggle("login");
        toast.success("Register successful");
      })
      .catch((err) => {
        console.log(err);
      });
  },
})(InnerForm);

export default RegisterController;
