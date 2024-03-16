"use client";

import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "../../../app/hooks/adminProtected";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import EditFaq from "../../components/Admin/Customization/EditFaq";

type Props = {};

const page = () => {
  return (
    <div>
      {/* <AdminProtected> */}
        <Heading
          title="e-shikhon"
          description="learning weeb"
          keywords="MERN"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/2">
            <AdminSidebar/>
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq />
          </div>
        </div>
      {/* </AdminProtected> */}
    </div>
  );
};

export default page;
