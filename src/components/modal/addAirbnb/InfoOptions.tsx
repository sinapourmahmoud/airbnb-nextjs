"use client";
import React, { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface Props {
  title: string;
  subtitle: string;
  counter: number;
  listTitle: string;
  clicked: (titleBox: string, label: number) => void;
}
const InfoOptions: React.FC<Props> = ({
  title,
  subtitle,
  counter,
  clicked,
  listTitle,
}) => {
  const plus = useCallback(() => {
    clicked(listTitle, counter + 1);
  }, [counter]);
  const minus = useCallback(() => {
    if (counter === 1) {
      return;
    }
    clicked(listTitle, counter - 1);
  }, [counter]);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col ">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base font-medium text-neutral-400">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={minus}
          className="p-3 border border-neutral-400 rounded-full cursor-pointer text-neutral-300"
        >
          <AiOutlineMinus fontSize={15} className="text-neutral-400" />
        </div>
        {counter}
        <div
          onClick={plus}
          className="p-3 border border-neutral-400 rounded-full cursor-pointer text-neutral-300"
        >
          <AiOutlinePlus fontSize={15} className="text-neutral-400" />
        </div>
      </div>
    </div>
  );
};

export default InfoOptions;
