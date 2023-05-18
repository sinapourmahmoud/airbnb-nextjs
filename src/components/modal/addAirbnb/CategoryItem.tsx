"use client";
import React from "react";
import { IconType } from "react-icons/lib";
interface Props {
  title: string;
  icon: IconType;
  selected: boolean;
  clicked: () => void;
}
const CategoryItem: React.FC<Props> = ({
  title,
  icon: Icon,
  selected,
  clicked,
}) => {
  return (
    <div
      onClick={clicked}
      className={`flex flex-col gap-2 items-center transition-all duration-300  rounded-lg border py-4  hover:border-black cursor-pointer ${
        selected ? "border-black" : "border-gray-300"
      }`}
    >
      <Icon fontSize={38} className="text-black" />
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default CategoryItem;
