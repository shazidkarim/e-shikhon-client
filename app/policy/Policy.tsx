import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
    <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
      <h1 className={`${styles.title} pt-2 text-center font-Poppins 800px:!text-[45px]`}>Our   <span className="text-purple-600">eShikhon</span>  Policy</h1>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold font-Poppins">Privacy Policy</h2>
        <p className="mt-2 font-Poppins">
          At eShikhon, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website or services. We encourage you to review our Privacy Policy to understand how we handle your information and your rights regarding privacy.
        </p>
        <a href="#" className="underline text-blue-500 font-Poppins">Read our Privacy Policy</a>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold font-Poppins">Refund Policy</h2>
        <p className="mt-2 font-Poppins">
          We strive to provide high-quality educational content and services to our users. However, if you are not satisfied with your purchase or experience, we offer a refund policy to ensure your satisfaction. Our Refund Policy outlines the terms and conditions for requesting a refund and the eligibility criteria for refunds.
        </p>
        <a href="#" className="underline text-blue-500 font-Poppins">Read our Refund Policy</a>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold font-Poppins">Terms of Service</h2>
        <p className="mt-2 font-Poppins">
          By accessing or using our website and services, you agree to comply with our Terms of Service. Our Terms of Service govern your use of eShikhon and outline the rights, responsibilities, and obligations of both users and eShikhon. We encourage you to review our Terms of Service to understand the rules and guidelines for using our platform.
        </p>
        <a href="#" className="underline text-blue-500 font-Poppins">Read our Terms of Service</a>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold font-Poppins">Cookie Policy</h2>
        <p className="mt-2 font-Poppins">
          Our website uses cookies to enhance your browsing experience and provide personalized content and services. Our Cookie Policy explains how we use cookies, what types of cookies we use, and how you can manage your cookie preferences. By continuing to use our website, you consent to the use of cookies as described in our Cookie Policy.
        </p>
        <a href="#" className="underline text-blue-500 font-Poppins">Read our Cookie Policy</a>
      </div>
    </div>
  </div>

  );
};

export default Policy;
