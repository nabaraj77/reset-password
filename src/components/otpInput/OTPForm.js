import React, { useReducer, useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

// import { useSelector, useDispatch } from "react-redux";

// components;
import OTPInput from "./index";

// actions;
// import { verifyOtp, resetOTP } from "../../../store/auth2/login/auth-slice";

const OTPForm = ({ handleClose, registerUser }) => {
  //   console.log("register user / ", registerUser);
  //   const dispatch = useDispatch();
  //   const { isLoadingOTP, isErrorOTP, isSuccessOTP, messageOTP } = useSelector(
  //     (state) => state.auth
  //   );
  const [otpValue, setOtpValue] = useState();

  const submitOtp = (event) => {
    event.preventDefault();
    let payload = {
      //   customer_id: registerUser.id,
      code: otpValue,
    };
    console.log(payload);
    // dispatch(verifyOtp(payload));
  };

  //   useEffect(() => {
  //     if (isErrorOTP) {
  //       toast.error(messageOTP.message);
  //     }
  //     if (isSuccessOTP) {
  //       console.log(messageOTP);
  //       toast.success(messageOTP.message);
  //       handleClose();
  //     }
  //     dispatch(resetOTP());
  //   }, [dispatch, isErrorOTP, isSuccessOTP]);

  const handleOTP = (value) => {
    setOtpValue(value);
  };

  return (
    <div className="wrapper">
      <div className="formWrapper shadow p-3 -5 bg-red rounded col-sm-7 col-10">
        <h5>OTP Verification</h5>
        <div className="otp-form">
          <div className="logoWrapper">
            <img className="logo" src="../images/bankLogo.jpg" alt="logo" />
          </div>
          <h4 className="formTitle">Verification!</h4>
          <p className="info">
            Please enter the five digits code below and proceed.
          </p>
          <form onSubmit={submitOtp}>
            <OTPInput
              autoFocus
              //   isNumberInput
              length={5}
              className="otpContainer"
              inputClassName="form-control"
              onChangeOTP={(otp) => handleOTP(otp)}
            />
            <div className="buttons">
              <button type="button" className="btn btn-danger btnResendOtp">
                Resend OTP
              </button>
              <button type="submit" className="btn btn-danger btnVerify">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
