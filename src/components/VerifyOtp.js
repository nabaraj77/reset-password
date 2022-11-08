import React, { useState } from "react";
import ResetPassword from "./ResetPassword";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const optEntered = otp.join("");
    console.log(optEntered);
  };

  return (
    <>
      <div className="wrapper">
        <div className="formWrapper shadow p-3 -5 bg-red rounded col-sm-7 col-10">
          <h5>OTP Verification</h5>
          <form action="" onSubmit={handleSubmit}>
            <div className="logoWrapper">
              <img className="logo" src="../images/bankLogo.jpg" alt="logo" />
            </div>
            <h4 className="formTitle">Verification!</h4>
            <p className="info">
              Please enter the five digits code below and proceed.
            </p>
            <div className="form-group row otpEnterField">
              {otp.map((data, index) => {
                return (
                  <input
                    className="form-control col-sm-1 col-1 col-md-1 verifyOtp"
                    type="text"
                    name="otp"
                    key={index}
                    value={data}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    required
                  />
                );
              })}
            </div>
            <div className="buttons">
              <button type="button" className="btn btn-primary btnResendOtp">
                Resend OTP
              </button>
              <button type="submit" className="btn btn-primary btnVerify">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
