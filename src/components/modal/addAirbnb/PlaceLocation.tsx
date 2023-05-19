"use client";
import React, { useMemo, useState } from "react";
import ModaltitleBox from "../ModaltitleBox";
import { countriesList } from "@/hooks/useCountries";
import Select from "react-select";

import { WorldCountriesType } from "@/types/worldsType";
import dynamic from "next/dynamic";
interface Props {
  clicked: (label: WorldCountriesType | null) => void;
  location: WorldCountriesType | null;
}
const PlaceLocation: React.FC<Props> = ({ clicked, location }) => {
  let [locationVal, setLocationVal] = useState<WorldCountriesType | null>(null);
  let Maps = useMemo(
    () =>
      dynamic(() => import("./../../Maps"), {
        ssr: false,
      }),
    [location]
  );
  return (
    <div>
      <ModaltitleBox
        title="Where is your place located"
        subtitle="Select country"
      />
      <Select
        placeholder="Anywhere..."
        options={countriesList}
        value={locationVal}
        onChange={(val) => {
          clicked(val);
          setLocationVal(val);
        }}
        formatOptionLabel={(val) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div>{val.flag}</div>
            <div>
              {val.label},
              <span className="text-neutral-500 ml-1">{val.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-2 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
      <Maps center={location?.latlng} />
    </div>
  );
};

export default PlaceLocation;
