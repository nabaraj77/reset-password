import React, { useEffect, useRef, useContext } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { axiosData } from "../api/axiosData";

// import "../Css/main.scss";
import "../assets/Scss/style.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  // const userNameFocus = useRef();
  // useEffect(() => {
  //   userNameFocus.current.focus();
  // }, []);
  const handleRegistration = (data) => {
    console.log(data);

    navigate("/verifyOtp");

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
    //     console.log(err)
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
        <form onSubmit={handleSubmit(handleRegistration)} className="form">
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
              {errors.userName && (
                <span className="errorDisplay">*User Name is required.</span>
              )}
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
                  pattern: /[9][8][0-9]{8}/,
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
                <span className="errorDisplay">*Phone Number is required.</span>
              )}
              {errors.phoneNumber?.type === "minLength" && (
                <span className="errorDisplay">
                  *Enter valid mobile number.
                </span>
              )}
              {errors.phoneNumber?.type === "maxLength" && (
                <span className="errorDisplay">
                  *Enter valid mobile number.
                </span>
              )}
              {errors.phoneNumber?.type === "pattern" && (
                <span className="errorDisplay">*Enter valid mobile number</span>
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
