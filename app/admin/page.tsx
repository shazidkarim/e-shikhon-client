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
          title="e-shikhon - Admin"
          description="admin"
          keywords="Programing"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/2">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllUsers />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
