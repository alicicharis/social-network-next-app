import React from "react";
import Image from "next/image";
import { CirclePlus } from "lucide-react";

import { CarouselItem } from "../ui/carousel";

const AddStory = () => {
  return (
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
      <div className="relative w-full h-[180px] group overflow-hidden cursor-pointer rounded-lg bg-blue-300 flex flex-col justify-end items-center">
        {/* <div className="absolute inset-0 bg-black rounded-lg bg-opacity-30 flex flex-col justify-end items-center"> */}
        <CirclePlus className="w-7 h-7 text-white" />
        <p className="text-white text-base pb-1">Add story</p>
        {/* </div> */}
      </div>
    </CarouselItem>
  );
};

export default AddStory;
