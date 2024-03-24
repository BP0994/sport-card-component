"use client";
import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import { Button } from "@nextui-org/react";


const Header = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div  className="my-8">
        <Card  />
      </div>
      <div className="flex items-center justify-center  my-8">
      <Button color="primary">See More</Button>

      </div>
    </div>
  );
};

export default Header;
