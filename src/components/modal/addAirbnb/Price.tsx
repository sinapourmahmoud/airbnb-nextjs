"use client";
import React from "react";
import ModaltitleBox from "../ModaltitleBox";
import { Form, Formik } from "formik";
import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import { BiDollar } from "react-icons/bi";
import * as Yup from "yup";
interface Props {
  goBack: () => void;
  price: number;
  clicked: (label: number) => void;
}
let validateSchema = Yup.object().shape({
  price: Yup.number().required().min(0),
});
const Price: React.FC<Props> = ({ goBack, price, clicked }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <ModaltitleBox
        title="Chose the price"
        subtitle="Please select the price"
      />
      <Formik
        validationSchema={validateSchema}
        initialValues={{
          price,
        }}
        onSubmit={({ price }) => {
          clicked(price);
        }}
      >
        <Form>
          <div className="flex flex-col gap-3">
            <Input
              labelName="Price"
              name="price"
              type="number"
              icon={BiDollar}
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button
              label="Prev"
              clicked={() => {
                goBack();
              }}
              outline
            />
            <Button label="Save" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Price;
