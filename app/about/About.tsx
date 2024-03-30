import React from "react";
import { styles } from "../styles/style";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-purple-600">eShikhon</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Welcome to eShikhon - Your Gateway to Programming Mastery! At
          eShikhon, our mission is to empower students to become proficient
          programmers by providing high-quality, accessible, and engaging
          programming education. Whether you are a beginner just starting your
          coding journey or an experienced developer looking to enhance your
          skills, eShikhon offers comprehensive learning resources tailored to
          your needs.
        </p>
        <br />
        <br />
        <p className="text-[18px] font-Poppins">
          We envision a world where everyone has the opportunity to excel in
          programming and technology. Through eShikhon, we aim to democratize
          access to coding education and bridge the digital divide by equipping
          individuals with the knowledge and skills needed to thrive in the
          digital age.
        </p>
        <br />
        <br />
        <p className="text-[18px] font-Poppins">
          What We Offer :<br />
          <br />
          * Comprehensive Courses: Our platform offers a wide range of courses
          covering various programming languages, frameworks, and technologies.
          From introductory courses for beginners to advanced topics for
          seasoned professionals, there is something for everyone at eShikhon.{" "}
          <br />
          * Interactive Learning: Learning programming should not be boring!
          That is why we have designed our courses to be interactive and engaging,
          with hands-on exercises, coding challenges, and real-world projects to
          reinforce your learning. <br />
          * Expert Instructors: Learn from industry experts and experienced
          instructors who are passionate about teaching and dedicated to helping
          you succeed. Our instructors bring real-world experience and practical
          insights to the classroom, ensuring that you receive top-notch
          education. <br />* Flexible Learning Options: We understand that
          everyone has different learning preferences and schedules. That is why
          we offer flexible learning options, including self-paced courses, live
          online classes, and personalized tutoring sessions, so you can learn
          at your own pace and on your own terms.
        </p>
        <br />
        <br />
        <p className="text-[18px] font-Poppins" >
          Our Commitment : <br />
          <br />
           At eShikhon, we are committed to your success. Whether
          you are aiming to land your dream job, launch your own startup, or
          simply expand your horizons, we are here to support you every step of
          the way. Join us on your coding journey and unlock your full potential
          with eShikhon!
        </p>
      </div>
    </div>
  );
};

export default About;
