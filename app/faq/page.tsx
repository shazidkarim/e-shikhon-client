"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../component/Admin/FAQ/FAQ";
type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="FAQ - eShikhon"
        description="Frequently asked questions"
        keywords="progrtamming,coding,web"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        route={route}
        setRoute={setRoute}
      />
      <br />
      <br />
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Page;
