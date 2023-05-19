"use client";
import React from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "@/utils/categories";
import BoxContainer from "../BoxContainer";

const CategoryBoxes: React.FC = () => {
  return (
    <BoxContainer>
      <div className="flex items-center gap-3 cursor-pointer  justify-between py-3 overflow-x-auto overflow-y-visible snap-x">
        {categories.map((item, index) => (
          <CategoryBox icon={item.icon} label={item.label} key={index} />
        ))}
      </div>
    </BoxContainer>
  );
};

export default CategoryBoxes;
