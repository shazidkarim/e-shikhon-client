import { useGetUsersAllCoursesQuery } from '@/redux/features/courses/coursesApi';
import React, { useEffect, useState } from 'react'

type Props = {}

const Courses = (props: Props) => {
    const {data,isLoading} = useGetUsersAllCoursesQuery({});
    const [courses,setCourses] = useState<any[]>([]);
    console.log(data)

useEffect(()=>{
    setCourses(data?.courses);
},[data]);


  return (
    <div className='{w-[90] 800px:w[80%] m-auto}'>
        <h1 className='text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-[#000] font-[700] tracking-tight'>
        expend your career {" "}
        <span className='text-gradient'>Oppurtunity</span> <br />
        </h1>
        <br />
        <br />
    </div>
  )
}

export default Courses