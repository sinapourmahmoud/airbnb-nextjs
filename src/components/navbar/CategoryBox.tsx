"use client";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import React, { useCallback } from "react";
import { IconType } from "react-icons/lib";
interface Props {
  icon: IconType;
  label: string;
}
const CategoryBox: React.FC<Props> = ({ label, icon: Icon }) => {
  let params = useSearchParams();
  let router = useRouter();
  let customQuery = params?.get("category");
  const sweechUrl = useCallback(() => {
    let currentParams = {};
    if (params) {
      console.log(params);
      currentParams = qs.parse(params.toString());
    }
    let updatedParams: any = {
      ...currentParams,
      category: label,
    };
    if (params?.get("category") === label) {
      delete updatedParams.category;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedParams,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);
  return (
    <div
      className={`flex flex-col gap-3 items-center relative ${
        customQuery === label && "text-black"
      }`}
      onClick={sweechUrl}
    >
      <Icon
        fontSize={33}
        className={` ${
          customQuery === label ? "text-black" : "text-neutral-500"
        }`}
      />
      <p
        className={` font-normal text-base ${
          customQuery === label ? "text-black" : "text-neutral-500"
        }`}
      >
        {label}
      </p>
      <div
        className={`${
          customQuery === label ? "block" : "hidden"
        }  absolute bottom-0 left-0 right-0 w-full h-1 bg-black translate-y-3`}
      ></div>
    </div>
  );
};

export default CategoryBox;
