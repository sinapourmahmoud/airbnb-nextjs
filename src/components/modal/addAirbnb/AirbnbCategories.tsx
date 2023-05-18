"use client";
import React from "react";
import ModaltitleBox from "../ModaltitleBox";
import { categories } from "@/utils/categories";
import CategoryItem from "./CategoryItem";
interface Props {
  clicked: (label: string) => void;
  selectedCategory: string;
}
const AirbnbCategories: React.FC<Props> = ({ clicked, selectedCategory }) => {
  return (
    <div>
      <ModaltitleBox subtitle="Please select category" title="Categories" />
      <div className="grid grid-cols-2 mt-4 max-h-[40vh] overflow-auto">
        {categories.map((item, index) => (
          <CategoryItem
            clicked={() => {
              clicked(item.label);
            }}
            selected={item.label === selectedCategory}
            key={index}
            title={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AirbnbCategories;
