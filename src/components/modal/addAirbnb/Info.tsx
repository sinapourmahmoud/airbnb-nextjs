"use client";
import React from "react";
import ModaltitleBox from "../ModaltitleBox";
import InfoOptions from "./InfoOptions";
interface Props {
  guests: number;
  bathrooms: number;
  rooms: number;
  clicked: (titleBox: string, label: number) => void;
}
const Info: React.FC<Props> = ({ guests, bathrooms, rooms, clicked }) => {
  return (
    <div>
      <ModaltitleBox
        title="Share some basics about your place"
        subtitle="What Amenities do you have?"
      />
      <div className="my-3 flex flex-col gap-4">
        <InfoOptions
          listTitle="rooms"
          clicked={(titleBox: string, label: number) => {
            clicked(titleBox, label);
          }}
          counter={rooms}
          title="Rooms"
          subtitle="how many rooms should have ?"
        />
        <InfoOptions
          listTitle="bathrooms"
          clicked={(titleBox: string, label: number) => {
            clicked(titleBox, label);
          }}
          counter={bathrooms}
          title="Bathrooms"
          subtitle="how many bathrooms should have ?"
        />
        <InfoOptions
          listTitle="guests"
          clicked={(titleBox: string, label: number) => {
            clicked(titleBox, label);
          }}
          counter={guests}
          title="Guests"
          subtitle="how many guests should have ?"
        />
      </div>
    </div>
  );
};

export default Info;
