import Link from "next/link";
import CoursePlayer from "../../../app/utils/CoursePlayer";
import Ratings from "../../../app/utils/Ratings";
import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { styles } from "../../../app/styles/style";
import CourseContentList from  '../Course/CourseContentList';
type Props = {
  data: any;
};

const CourseDetails = ({ data }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const discountPercentenge =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;

  const discountPercentengePrice = discountPercentenge.toFixed(0);
  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id);

  const handleOrder = (e: any) => {
    console.log("ggg");
  };
  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center ">
                <Ratings rating={data.rating} />
                <h5 className="text-black dark:text-white">
                  {data.review?.length} reviews
                </h5>
              </div>
              <h5 className="text-black dark:text-white">
                {data.purchased} Students
              </h5>
            </div>
            <br />
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              what you will learn from this course?
            </h1>
            <div>
              {data.benifits?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneCircle
                      size={20}
                      className="text-black dark:text-white"
                    />
                  </div>
                  <p className="pl-2 text-black dark:text-white ">
                    {item.title}
                  </p>
                </div>
              ))}
              <br />
              <br />
            </div>
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              what is the prerequisites for starting this course?
            </h1>
            {data.prerequisites?.map((item: any, index: number) => (
              <div className="w-full flex 800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-black dark:text-white"
                  />
                </div>
                <p className="pl-2 text-black dark:text-white ">{item.title}</p>
              </div>
            ))}
            <br />
            <br />
            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Overview
              </h1>
              {/* here is course content list component  */}
              <CourseContentList/>
            </div>
            <br />
            <br />
            {/* course decription */}
            <div className="w-full">
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Details
              </h1>
              <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">
                {data.decription}
              </p>
            </div>
            <br />
            <br />
            <div className="w-full">
              <div className="800px:plex items-center">
                <Ratings rating={data?.ratings} />
                <div className="mb-2 800px:mb-[unset]" />
                <h5 className="text-[25px] font-Poppins text-black dark:text-white">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixed(2)}{" "}
                  Course Rating * {data?.review?.length} reviews
                </h5>
              </div>
              <br />
              {(data?.reviews && [...data.reviews].reverse()).map(
                (item: any, index: number) => (
                  <div className="w-full pb-4" key={index}>
                    <div className="flex">
                      <div className=" w-[50px] h-[50px]">
                        <div className="w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                          <h1 className=" uppercase text-[18px] text-black dark:text-white">
                            {item.user.name.slice(0, 2)}
                          </h1>
                        </div>
                      </div>
                      <div className="hidden 800px:block pl-2">
                        <div className="flex items-center">
                          <h5 className="text=[18px] pr-2 text-black dark:text-white">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                        <p className="text-black dark:text-white">
                          {" "}
                          {item.comment}
                        </p>
                        <small className="text-[#000000d1] dark:text-[#ffffff83] ">
                          {format(item.createdAt)}
                        </small>
                      </div>
                      <div className=" pl-2 flex 800px:hidden items-center">
                        <h5 className="text=[18px] pr-2 text-black dark:text-white">
                          {item.user.name}
                        </h5>
                        <Ratings rating={item.rating} />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className=" w-full 800px:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-full">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h1 className="pt-5 text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "free" : data.price + "$"}
                </h1>
                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white ">
                  {data.estimatedPrice}$
                </h5>
                <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white ">
                  {discountPercentengePrice}% off
                </h4>
              </div>
              {isPurchased ? (
                <Link
                  className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                  href={`course-access/${data._id}`}
                >
                  Enter to course
                </Link>
              ) : (
                <div
                  className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                  onClick={handleOrder}
                >
                  buy now {data.price}$
                </div>
              )}
            </div>
            <br />
            <p className="pb-1 text-black dark:text-white "> Source code included </p>
            <p className="pb-1 text-black dark:text-white "> Full lifetime access </p>
            <p className="pb-1 text-black dark:text-white "> certificate of completation</p>
            <p className="pb-3 800px:pb-1 text-black dark:text-white "> premium support </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;