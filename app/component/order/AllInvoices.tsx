import React, { FC, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { format } from "timeago.js";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { AiOutlineMail } from "react-icons/ai";
import Loader from "../Loader";
import { useGetAllCoursesQuery } from "../../../redux/features/courses/coursesApi";
import { useGetAllOrdersQuery } from "../../../redux/features/orders/OrdersApi";

type Props = {
  isDashboard?: boolean;
};

const AllInvoices: FC<Props> = ({ isDashboard }) => {
  const { theme, setTheme } = useTheme();
  const { isLoading, data } = useGetAllOrdersQuery({});
  const { data: usersData } = useGetAllUsersQuery({});
  const { data: coursesData } = useGetAllCoursesQuery({});
  const [orderData, setOrderData] = useState([]);

  const rows = [
    {
      id: "555555555555",
      userName: "shazid karim",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
    {
      id: "555555555555",
      userName: "shazid",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
    {
      id: "555555555555",
      userName: "shazid",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
    {
      id: "555555555555",
      userName: "shazid",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
    {
      id: "555555555555",
      userName: "shazid",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
    {
      id: "555555555555",
      userName: "shazid",
      UserEmail: "fffdd@ddd",
      title: "jjjjjj",
      price: "999",
      create_at: "2 day ago",
    },
  ];

  useEffect(() => {
    if (data) {
      const temp = data.orders.map((item: any) => {
        const user = usersData?.courses.find(
          (user: any) => course._id === item.userId
        );

        const course = usersData?.courses.find(
          (course: any) => course._id === item.courseId
        );
        return {
          ...item,
          userName: user?.name,
          userEmail: user?.email,
          title: course?.name,
          price: "$" + course?.price,
        };
      });
      setOrderData(temp);
    }
  }, [data, usersData, coursesData]);

  const columns: any = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard
      ? []
      : [
          { field: "userEmail", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Course Title", flex: 1 },
        ]),
    { field: "price", headerName: "Price", flex: 0.5 },
    ...(isDashboard
      ? [{ field: "created_at", headerName: "created At", flex: 0.5 }]
      : [
          {
            field: "",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params: any) => {
              return (
                <a href={`mailto:${params.row.userEmail}`}>
                  <AiOutlineMail
                    className="text-black dark:text-white"
                    size={20}
                  />
                </a>
              );
            },
          },
        ]),
  ];

  orderData &&
    orderData.forEach((item: any) => {
      rows.push({
        id: item._id,
        userName: item.userName,
        UserEmail: item.UserEmail,
        title: item.title,
        price: item.price,
        create_at: format(item.createdAt),
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <Box m={isDashboard ? "0" : "40px"}>
          <Box
            m={isDashboard ? "0" : " 40px 0 0 0 "}
            height={isDashboard ? "35px" : "90vh"}
            overflow={"hidden"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-MuSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #fffffff30 !important"
                    : "1px solid #ccc !important",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none !important",
              },
              "& .name-column-cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                background: theme === "dark" ? "#3e4396" : "#A4A9FC",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                background: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? "#b7ebde !important" : "#000 !important",
              },
              "& .MuiCheckbox-toolbarContainer .MuiButton-text": {
                color: "#fff !important",
              },
            }}
          >
            <DataGrid
              checkboxSelection={isDashboard ? false : true}
              rows={rows}
              columns={columns}
              components={isDashboard ? {} : { Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default AllInvoices;
