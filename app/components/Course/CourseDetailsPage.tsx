import Heading from "@/app/utils/Heading";
import Loader from "../../../app/component/Loader";
import { useGetCourseDetailsQuery } from "../../../redux/features/courses/coursesApi";
import React, { useState } from "react";
import { DataArray } from "@mui/icons-material";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from './CourseDetails';

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("login");
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useGetCourseDetailsQuery(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + "- Eshikhon"}
            description={
              "e shikhon is a programming learning platform which is develop by shazid karim"
            }
            keywords={data.course.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={1}
            setRoute={setRoute}
            route={route}
          />
          <CourseDetails/>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
