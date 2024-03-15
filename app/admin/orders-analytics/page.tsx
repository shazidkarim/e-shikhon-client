"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import OrdersAnalytics from "../../component/Admin/Analytics/OrdersAnalytics";
import DashboardHero from "../../../app/components/Admin/DashboardHero";

type Props = {};

const page = () => {
  return (
    <div>
      <Heading
        title="e-shikhon - Admin"
        description="admin"
        keywords="Programing"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/2">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero/>
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
