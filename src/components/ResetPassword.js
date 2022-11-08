import React, { useEffect, useRef, useContext } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BoolContext } from "../context/value";
// import { axiosData } from "./api/axios";

import "./ResetPassword.css";

const ResetPassword = () => {
  const { setBool } = useContext(BoolContext);
  // const userNameFocus = useRef();
  // useEffect(() => {
  //   userNameFocus.current.focus();
  // }, []);
  const handleRegistration = (data) => {
    console.log(data);
    setBool(1);
    resetField("userName");
    resetField("phoneNumber");

    // const dataToSend = {
    //   mobileNumber: data.phoneNumber,
    //   channel: "CDM",
    //   requestId: "1",
    //   emailAddress: "haripaudel4@gmail.com",
    //   notificaitonType: "2",
    // };
    // const apiOtpRequest = async () => {
    //   try {
    //     await axiosData.post("/request/otp", data);
    //   } catch (err) {
    //     if (!err?.response) {
    //       toast.error("No Server Response.");
    //     } else if (err.response?.status === 401) {
    //       toast.error("Un authenciated.");
    //     } else {
    //       toast.error("Login Failed.");
    //     }
    //   }
    // };
  };
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className="wrapper">
      <div className="formWrapper shadow p-3 bg-red rounded col-sm-7 col-10">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="logoWrapper">
            <img className="logo" src="../images/logo.png" alt="logo" />
          </div>
          <h4 className="formTitle"> Reset Password</h4>
          <div className="form-group row">
            <label htmlFor="userName" className="col-lg-3  col-form-label">
              <h6 className="labelName"> User Name</h6>
            </label>
            <div className="col-lg-9 ">
              <input
                type="text"
                className="form-control"
                {...register("userName", {
                  required: "User Name is required",
                })}
                placeholder="Enter User Name"
              />
              {errors.userName && <span>*User Name is required.</span>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phoneNumber" className="col-lg-3  col-form-label">
              <h6 className="labelName">Phone Number</h6>
            </label>
            <div className="col-lg-9   ">
              <input
                className="form-control "
                type="number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  maxLength: {
                    value: 10,
                    message: "Mobile Number must be 10 digits.",
                  },
                  minLength: {
                    value: 10,
                    message: "Mobile Number must be 10 digits.",
                  },
                })}
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber?.type === "required" && (
                <span>*Phone Number is required.</span>
              )}
              {errors.phoneNumber?.type === "minLength" && (
                <span>*Mobile Number must be 10 digits.</span>
              )}
              {errors.phoneNumber?.type === "maxLength" && (
                <span>*Mobile Number must be 10 digits.</span>
              )}
            </div>
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="btn btn-danger submitBtn btnSubmit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;