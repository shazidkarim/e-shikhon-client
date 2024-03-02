"use client";
import { FC, useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChartOutlinedIcon,
  MapOutlinedIcon,
  GroupsIcon,
  OndemandVideoIcon,
  VideoCallIcon,
  WebIcon,
  QuizIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  SettingsIcon,
  ExitToAppIcon,
} from "./Icon";

import avatarDefault from "../../../../public/avatar.svg";
import { UseSelector, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSeclected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSeclected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSeclected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins  ">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logOut, setLogOut] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  const logoutHandler = () => {
    setLogOut(true);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#111c41 !important" : "#fff !important"
          }`,
        },
        "$ .pro-icon-wrapper": {
          background: "transparent !important ",
        },
        "& .pro-inner-item:hover": {
          color: "#6870fa !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-menu-item": {
          color: "!bg-white dark:bg-[#111C43]",
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: isCollapsed ? "0%" : "16%",
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/">
                  <h3 className=" text-[25px] font-Poppins uppercase dark:text-white text-black ">
                    e-Shikhon
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1] " />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="pofile-user"
                  width={100}
                  height={100}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6fe6",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px] text-black dark:text-[#ffffffc1] "
                  sx={{ m: "10px 0 0 0 " }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize "
                  sx={{ m: "10px 0 0 0 " }}
                >
                  - {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Data"}
            </Typography>
            <Item
              title="Users"
              to="/admin/users"
              icon={<GroupsIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Content"}
            </Typography>
            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Live Courses"
              to="/admin/courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSeclected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title="Hero"
              to="/admin/hero"
              icon={<WebIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<QuizIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Categories"
              to="/admin/categories"
              icon={<WysiwygIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Categories"}
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytice"
              to="/admin/courses_analytice"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Orders Analytice"
              to="/admin/orders_analytice"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Users Analytice"
              to="/admin/users_analytice"
              icon={<ManageHistoryIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Typography
              variant="h6"
              sx={{ m: "15px 0 5px 25px " }}
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400] "
            >
              - {!isCollapsed && "Extras"}
            </Typography>
            <Item
              title="Settings"
              to="/admin/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
            <Item
              title="Logout"
              to="/"
              icon={<ExitToAppIcon />}
              selected={selected}
              setSeclected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
