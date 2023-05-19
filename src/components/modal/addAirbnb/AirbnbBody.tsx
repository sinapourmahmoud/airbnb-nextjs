"use client";
import React, { useCallback, useContext, useState } from "react";
import AirbnbCategories from "./AirbnbCategories";
import Button from "@/components/Button";
import PlaceLocation from "./PlaceLocation";
import { WorldCountriesType } from "@/types/worldsType";
import Info from "./Info";
import UploadImage from "@/components/UploadImage";
import Description from "./Description";
import Price from "./Price";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FrontContext } from "@/context/ToogleContext";
let initialList = {
  category: "",
  locationValue: null,
  guestCount: 1,
  roomCount: 1,
  imageSrc: "",
  bathroomCount: 1,
  description: "",
  title: "",
  price: 1,
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
  let { setToggle } = useContext(FrontContext);
  let router = useRouter();
  let [list, setList] = useState(initialList);
  let [step, setStep] = useState<STEPS>(0);
  const goNext = useCallback(() => {
    if (step === 5) {
      axios
        .post("/api/listing", list)
        .then((res) => {
          toast.success("Your place successfully added");
          router.refresh();
        })
        .catch((err) => {
          console.log(err);
          toast.error("You have error, try again please");
        })
        .finally(() => {
          setToggle("");
        });

      return;
    }

    setStep((prev) => ++prev);
  }, [step]);
  const goBack = useCallback(() => {
    if (step === 0) {
      return;
    }
    setStep((prev) => prev - 1);
  }, [step]);
  const changeList = useCallback(
    (name: string, val: any) => {
      setList((prev) => {
        return {
          ...prev,
          [name]: val,
        };
      });
      list;
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
      ) : step === 1 ? (
        <PlaceLocation
          location={list.locationValue}
          clicked={(label: WorldCountriesType | null) => {
            changeList("locationValue", label);
          }}
        />
      ) : step === 2 ? (
        <Info
          bathrooms={list.bathroomCount}
          rooms={list.roomCount}
          guests={list.guestCount}
          clicked={(listtitle: string, label: number) => {
            changeList(listtitle, label);
          }}
        />
      ) : step === 3 ? (
        <UploadImage
          clicked={(label: string) => {
            changeList("imageSrc", label);
          }}
          imageSrc={list.imageSrc}
        />
      ) : step === 4 ? (
        <Description
          title={list.title}
          description={list.description}
          clicked={(titleBox: string, label: string) => {
            changeList(titleBox, label);
          }}
          goBack={goBack}
          goNext={goNext}
        />
      ) : step === 5 ? (
        <Price
          goBack={goBack}
          clicked={(label: number) => {
            changeList("price", label);
            goNext();
          }}
          price={list.price}
        />
      ) : null}
      {step < 4 ? (
        <div className="flex items-center gap-3 mt-4">
          <Button
            label="Prev"
            clicked={() => goBack()}
            outline
            disabled={step == 0}
          />
          <Button
            label="Next"
            clicked={() => {
              goNext();
            }}
            disabled={step == 5}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AirbnbBody;
