"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from './components/Route/Courses';
import Reviews from './components/Route/Reviews';
import FAQ from './component/Admin/FAQ/FAQ';
import Footer  from './components/Footer';
interface Props {}

const Page: FC<Props> = (props) => {
  const [activeItem, setActiveItem] = useState(0);
  const [open, setOpen] = useState(false);
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
      setRoute = {setRoute}
      route={route}
      />
      <Hero/>
      <Courses/>
      <Reviews/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Page;
