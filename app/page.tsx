"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="e-Shikhon"
        description="Learning"
        keywords="React,Fron end ,"
      />
      <Header
      open={open}
      setOpen={setOpen}
      activeItem={activeItem}
      />
      <h1>hello world</h1>
    </div>
  );
};

export default Page;
