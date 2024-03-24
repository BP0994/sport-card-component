"use client";
import React from "react";
import lasvegas from "../assets/las vegas.png";
import newjersy from "../assets/newJersy.png";
import sacramento from "../assets/sacramento.png";
import advertisment from "../assets/addvertisement.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className=" backdrop-blur-xl flex flex-wrap  justify-between">
      <div className="p-4 rounded max-w-52  bg-base-300   shadow-xl">
        <figure className=" ">
          <Image src={sacramento} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className="mb-4 text-left">
            Sacramento Rivers Cat
          </h2>
          <div className="flex justify-start gap-x-4 p-2 bg-base-200">
            <div className="flex flex-col gap-2">
              <h1 className="text-xs">Total Events</h1>
              <p className="text-sm ">48 Events</p>
            </div>
            <div className="felx flex-col ">
              <h1 className="text-xs text-left mb-2 ">Sports</h1>
              <p className="text-sm ">Baseball</p>
            </div>
          </div>
        </div>
      </div>
      {/* <--- la vega ----> */}
      <div className="p-4 rounded max-w-52 bg-base-300  shadow-xl">
        <figure className=" ">
          <Image src={lasvegas} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className=" text-base mb-4  text-left">
            Las Vegas Aviators
          </h2>
          <div className="flex justify-start gap-x-4 p-2 bg-base-200">
            <div className="flex flex-col gap-2">
              <h1 className="text-xs">Total Events</h1>
              <p className="text-sm ">28 Events</p>
            </div>
            <div className="felx flex-col ">
              <h1 className="text-xs text-left mb-2 ">Sports</h1>
              <p className="text-sm ">Baseball</p>
            </div>
          </div>
        </div>
      </div>
      {/* <--- new jersy -->  */}
      <div className="p-4 rounded max-w-52 bg-base-300  shadow-xl">
        <figure className=" ">
          <Image src={newjersy} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className=" text-base mb-4  text-left">
            Las Vegas Aviators
          </h2>
          <div className="flex justify-start gap-x-4 p-2 bg-base-200">
            <div className="flex flex-col gap-2">
              <h1 className="text-xs">Total Events</h1>
              <p className="text-sm ">15 Events</p>
            </div>
            <div className="felx flex-col ">
              <h1 className="text-xs text-left mb-2 ">Sports</h1>
              <p className="text-sm "> Sports</p>
            </div>
          </div>
        </div>
      </div>
      {/* <--- las vegas --> */}
      <div className="p-4 rounded max-w-52 bg-base-300  shadow-xl">
        <figure className=" ">
          <Image src={lasvegas} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className=" text-base mb-4  text-left">
            Las Vegas Aviators
          </h2>
          <div className="flex justify-start gap-x-4 p-2 bg-base-200">
            <div className="flex flex-col gap-2">
              <h1 className="text-xs">Total Events</h1>
              <p className="text-sm ">28 Events</p>
            </div>
            <div className="felx flex-col ">
              <h1 className="text-xs text-left mb-2 ">Sports</h1>
              <p className="text-sm ">Baseball</p>
            </div>
          </div>
        </div>
      </div>

      {/* adver tise ment  */}
      <div className="p-4 rounded max-w-52 bg-base-300  shadow-xl">
        <figure className=" ">
          <Image src={advertisment} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className=" text-base mb-4 text-left">
            Advertisement title
          </h2>
          <p className="text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
