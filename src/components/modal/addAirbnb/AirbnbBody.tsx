"use client";
import React, { useCallback, useState } from "react";
import AirbnbCategories from "./AirbnbCategories";
import Button from "@/components/Button";

let initialList = {
  category: "",
};
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const AirbnbBody: React.FC = () => {
  let [list, setList] = useState(initialList);
  let [step, setStep] = useState<STEPS>(0);
  const goNext = useCallback(() => {
    if (step === 5) {
      return;
    }
    if (step === 0 && !list.category) {
      return;
    }
    setStep((prev) => prev + 1);
  }, [step]);
  const goBack = useCallback(() => {
    if (step === 0) {
      return;
    }
    setStep((prev) => prev - 1);
  }, [step]);
  const changeList = useCallback(
    (name: string, val: string) => {
      setList((prev) => {
        return {
          ...prev,
          [name]: val,
        };
      });
      console.log(list);
    },
    [list]
  );
  return (
    <div className="flex flex-col gap-3">
      {step === 0 ? (
        <AirbnbCategories
          selectedCategory={list.category}
          clicked={(label: string) => {
            changeList("category", label);
          }}
        />
      ) : null}
      <div className="flex items-center gap-3 mt-4">
        <Button
          label="Prev"
          clicked={() => goBack()}
          outline
          disabled={step == 0}
        />
        <Button label="Next" clicked={() => goNext()} disabled={step == 5} />
      </div>
    </div>
  );
};

export default AirbnbBody;
