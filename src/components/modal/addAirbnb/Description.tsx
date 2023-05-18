"use client";
import React from "react";
import ModaltitleBox from "../ModaltitleBox";
import Input from "@/components/inputs/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";

let validateSchema = Yup.object().shape({
  title: Yup.string().required().min(5).max(255),
  description: Yup.string().required().min(5).max(4600),
});
interface Props {
  goBack: () => void;
  goNext: () => void;
}
const Description: React.FC<Props> = ({ goBack, goNext }) => {
  return (
    <div className="flex flex-col gap-4">
      <ModaltitleBox
        title="how would you describe your place"
        subtitle="short and sweet works the best"
      />
      <Formik
        validationSchema={validateSchema}
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={() => {
          goNext();
        }}
      >
        <Form>
          <div className="flex flex-col gap-3">
            <Input labelName="Title" name="title" type="text" />
            <Input labelName="Description" name="description" type="text" />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button
              label="Prev"
              clicked={() => {
                goBack();
              }}
              outline
            />
            <Button label="Next" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Description;
