"use client";
import AdminProtected from "../../../app/hooks/adminProtected";
import React from "react";
import Heading from "../../../app/utils/Heading";
import DashboardHero from "../../../app/components/Admin/DashboardHero";
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import AllUsers from '../../component/Admin/users/AllUsers.tsx';
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
