'use client'
import React from 'react'
import  { FC, use, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../../../app/styles/style";

import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiFillGithub,
  } from "react-icons/ai";
  import { FcGoogle } from "react-icons/fc";

type Props = {
    setRoute: (route: string) => void;
  setOpen: (route: boolean) => void;
}
const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your  email"),
    password: Yup.string().required("Please enter your password !").min(6),
  });
  
  const Login: FC<Props> = ({ setRoute, setOpen }) => {
      const [show, setShow] = useState(false);
      const formik = useFormik({
          initialValues: { email: "", password: "" },
          validationSchema: schema,
          onSubmit: async ({ email, password }) => {
              console.log(email,password);
            },
        });
    const { errors, touched, values, handleChange, handleSubmit } = formik;
  
    return (
        <div className="w-full">
         <h1 className={`${styles.title}`}>Login width e-Shikhon</h1>
        </div>
  )
}

export default Login;