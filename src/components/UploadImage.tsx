"use client";
import React, { useCallback, useState } from "react";
import ModaltitleBox from "./modal/ModaltitleBox";
import { CldUploadWidget } from "next-cloudinary";

import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
interface Props {
  imageSrc: string;
  clicked: (label: string) => void;
}
const UploadImage: React.FC<Props> = ({ imageSrc, clicked }) => {
  let uploadImage = useCallback(
    (result: any) => {
      clicked(result.info.secure_url);
    },
    [imageSrc]
  );

  return (
    <div className="flex flex-col gap-4">
      <ModaltitleBox
        title="Upload images"
        subtitle="Show the people the images of your place"
      />
      <CldUploadWidget
        uploadPreset="cnqo3mkq"
        onUpload={uploadImage}
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => {
                if (open) {
                  open?.();
                }
              }}
              className="w-full border cursor-pointer min-h-[35vh] hover:opacity-75 border-neutral-300 relative  flex items-center justify-center rounded-lg"
            >
              <TbPhotoPlus fontSize={34} className="text-black" />
              {imageSrc && (
                <div className="absolute w-full h-full">
                  <Image
                    src={imageSrc}
                    alt="uploadedImage"
                    className="w-full h-full object-cover rounded-lg"
                    width={100}
                    height={350}
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
