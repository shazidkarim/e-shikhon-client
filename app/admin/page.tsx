'use client'
import React from "react";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/Heading";
import AdminSidebar from '../components/Admin/sidebar/AdminSidebar';
import DashboardHero from '../components/Admin/DashboardHero';

type Props = {};

const page = () => {
  return (
    <div>
    <AdminProtected>
      <Heading
        title={`e-Shikhon - Admin`}
        description="Learning"
        keywords="React,Fron end ,"
      />

      <div className="flex h-[200vh] ">
        <div className="1500px:w-[16%] w-1/2">
          <AdminSidebar />
        </div>
        <div className="w[85%]">
          <DashboardHero isDashboard={true} />
        </div>
      </div>
    </AdminProtected>
  </div>
  );
};

export default page;
