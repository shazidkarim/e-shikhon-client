"use client";
import React from "react";
import Heading from "../../../app/utils/Heading";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
import AdminSidebar from  '../../components/Admin/sidebar/AdminSidebar';
import CourseAnalytics from "../../component/Admin/Analysis/CourseAnalytics";

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
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar/>
        </div>
        <div className="w-[85%]">
          <DashboardHeader/>
          <CourseAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;