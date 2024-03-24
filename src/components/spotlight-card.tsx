import { Image } from "@nextui-org/react";
import React from "react";

const Spotlight_card = ({
  image,
  team,
  time,
  place,
  button,
}: {
  image?: string;
  team?: string;
  time?: string;
  place?: string;
  button?: string;
}) => {
  return (
    <div className=" backdrop-blur-xl flex flex-wrap  gap-4">
      <div className="p-4 rounded max-w-80 bg-base-100   shadow-xl">
        <figure className="">
          <Image src={image} alt="Shoes" className="rounded-lg " />
        </figure>
        <div className="border-b-1 border-dashed my-4"></div>
        <div className=" items-center text-center  mt-4">
          <h2 className="text-xl mb-4 ">{team}</h2>
          <h2 className="text-base mb-4">{time}</h2>
          <h2 className="text-base mb-4 ">{place}</h2>
          <button className="btn text-white
           btn-neutral">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spotlight_card;
