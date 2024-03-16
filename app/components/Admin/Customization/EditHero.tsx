/* eslint-disable react-hooks/exhaustive-deps */
import { styles } from "@/app/styles/style";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "../../../../redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";
import { AiOutlineCamera } from "react-icons/ai";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

type Props = {};

const EditHero = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("Hero updated successfully!");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }

  }, [data, isSuccess, error]);

  const handleUpdate = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    await editLayout({
      type: "Banner",
      image,
      title,
      subTitle,
    });
  };

  return (
    <>
      <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] left-4 1000px:top-[unset] 1500px:h-[600px] 1500px:w-[600px] 1100px:h-[600px] h-[50vh] w-[50vh] hero_animation rounded-full"></div>
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10 ">
        <Image
          src={require("../../../../public/banner-img-1.png")}
          alt="banner img"
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-10 "
        />
      </div>
      <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-black text-[30px] px-3 w-full 1000px:text-[70px] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[700px] 1500px:ml-4 ">
          Imporve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[63%] 1100px:!w-[78%] ">
          We have 40k+ Online courses & 500K+ Online registered student. Find
          your desired Courses from them.
        </p>
        <br />
        <br />
        <div className="1500px:!w-[63%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent  relative ">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin "
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]  ">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:!w-[63%] 1100px:w-[78%] w-[90%] flex items-center ">
          <Image
            src={require("../../../../public/client-1.jpg")}
            alt="client img"
            className="rounded-full"
          />
          <Image
            src={require("../../../../public/client-2.jpg")}
            alt="client img"
            className="rounded-full -ml-[20px]"
          />
          <Image
            src={require("../../../../public/client-3.jpg")}
            alt="client img"
            className="rounded-full -ml-[20px]"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500K+ People already trusted us
            <span>
              {" "}
              <Link
                href={"/courses"}
                className="dark:text-[#46e256] text-[crimson]"
              >
                View Courses
              </Link>
            </span>
          </p>
        </div>
        <br />
      </div>
    </div>
    </>
  );
};

export default EditHero;
