
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'
import avatarDefualt from '../../../public/avatar.svg'
import { RiLockPasswordLine } from 'react-icons/ri';
import Link from 'next/link';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { SiCoursera } from 'react-icons/si';
import { AiOutlineLogout } from 'react-icons/ai';
type Props = {
    user: any;
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logouutHanmler: any;
}

const SideBarProfile: FC<Props> = ({user,avatar,logouutHanmler, }) => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    if (user) {
      setActive(6);
    }
  }, [user]);
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefualt
          }
          alt=""
          width={20}
          height={20}
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
          My Acount
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black" />
        <h2 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
          Enrolled Courses
        </h2>
      </div>
      {user  && (
        <Link
          className={`w-full flex items-center px-3 py-4 cursor-pointer ${
            active === 6 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
          }`}
          href={"/admin"}
        >
          <MdOutlineAdminPanelSettings
            size={20}
            className="dark:text-white text-black"
          />
          <h2 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
            Admin Dashboard
          </h2>
        </Link>
      )}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} className="dark:text-white text-black" />
        <h2 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
          Change Password
        </h2>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => logouutHanmler()}
      >
        <AiOutlineLogout size={20} className="dark:text-white text-black" />
        <h2 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
          Log Out
        </h2>
      </div>
    </div>
  );
};

export default SideBarProfile;