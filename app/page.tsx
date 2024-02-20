"use client";
import React, { FC, useState } from "react";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <h1>this is shazid karim</h1>
    </div>
  );
};

export default Page;
