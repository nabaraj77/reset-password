// import React, { useState } from "react";

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState(new Array(5).fill(""));

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     //Focus next input
//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const optEntered = otp.join("");
//     console.log(typeof optEntered);
//   };

//   return (
//     <>
//       <div className="wrapper">
//         <div className="formWrapper shadow p-3 -5 bg-red rounded col-sm-7 col-10">
//           <h5>OTP Verification</h5>
//           <form action="" onSubmit={handleSubmit} className="form">
//             <div className="logoWrapper">
//               <img className="logo" src="../images/bankLogo.jpg" alt="logo" />
//             </div>
//             <h4 className="formTitle">Verification!</h4>
//             <p className="info">
//               Please enter the five digits code below and proceed.
//             </p>
//             <div className="form-group row otpEnterField">
//               {otp.map((data, index) => {
//                 return (
//                   <input
//                     className="form-control col-sm-1 col-1 verifyOtp"
//                     type="text"
//                     name="otp"
//                     key={index}
//                     value={data}
//                     maxLength={1}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     required
//                   />
//                 );
//               })}
//             </div>
//             <div className="buttons">
//               <button type="button" className="btn btn-danger btnResendOtp">
//                 Resend OTP
//               </button>
//               <button type="submit" className="btn btn-danger btnVerify">
//                 Verify
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerifyOtp;

// import React, { useReducer } from "react";

// const VerifyOtp = ({ isLoading, getOtpValues }) => {
//   const formInitialState = {
//     otp1: "",
//     otp2: "",
//     otp3: "",
//     otp4: "",
//     otp5: "",
//   };
//   const reducer = (state, action) => {
//     return { ...state, ...action };
//   };
//   const [inputValues, dispatchFormValue] = useReducer(
//     reducer,
//     formInitialState
//   );
//   const { otp1, otp2, otp3, otp4, otp5 } = inputValues;
//   const reducerInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatchFormValue({ [name]: value });
//   };
//   const validateOtp = (event) => {
//     if (event.target.value != "") {
//     }
//   };

//   const submitOtp = (event) => {
//     let otp = `${inputValues.otp1}${inputValues.otp2}${inputValues.otp3}${inputValues.otp4}${inputValues.otp5}`;
//     event.preventDefault();
//     getOtpValues(otp);
//   };

//   return (
//     <div className="wrapper">
//       <div className="formWrapper shadow p-3 -5 bg-red rounded col-sm-7 col-10">
//         <h5>OTP Verification</h5>
//         <div className="otp-form">
//           <div className="logoWrapper">
//             <img className="logo" src="../images/bankLogo.jpg" alt="logo" />
//           </div>
//           <h4 className="formTitle">Verification!</h4>
//           <p className="info">
//             Please enter the five digits code below and proceed.
//           </p>
//           <form onSubmit={submitOtp}>
//             <div
//               id="otp"
//               className="inputs d-flex flex-row  mt-2 form-group row otpEnterField"
//             >
//               <input
//                 className="m-2 text-center form-control rounded col-sm-1 col-1 verifyOtp"
//                 type="text"
//                 name="otp1"
//                 value={otp1}
//                 id="first"
//                 maxLength="1"
//                 onChange={reducerInputChange}
//               />
//               <input
//                 className="m-2 text-center form-control rounded col-sm-1 col-1 verifyOtp"
//                 type="text"
//                 id="second"
//                 name="otp2"
//                 value={otp2}
//                 maxLength="1"
//                 onChange={reducerInputChange}
//               />
//               <input
//                 className="m-2 text-center form-control rounded col-sm-1 col-1 verifyOtp"
//                 type="text"
//                 id="third"
//                 name="otp3"
//                 value={otp3}
//                 maxLength="1"
//                 onChange={reducerInputChange}
//               />
//               <input
//                 className="m-2 text-center form-control rounded col-sm-1 col-1 verifyOtp"
//                 type="text"
//                 id="fourth"
//                 name="otp4"
//                 value={otp4}
//                 maxLength="1"
//                 onChange={reducerInputChange}
//               />
//               <input
//                 className="m-2 text-center form-control rounded col-sm-1 col-1 verifyOtp"
//                 type="text"
//                 id="fifth"
//                 name="otp5"
//                 value={otp5}
//                 maxLength="1"
//                 onKeyUp={validateOtp}
//                 onChange={reducerInputChange}
//               />
//             </div>
//             {/* <div className="mt-2">
//               <button variant="contained" type="submit" loading={isLoading}>
//                 Validate
//               </button>
//             </div> */}
//             <div className="buttons">
//               <button type="button" className="btn btn-danger btnResendOtp">
//                 Resend OTP
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-danger btnVerify"
//                 loading={isLoading}
//               >
//                 Verify
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;

/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "../hooks/use-previous";

export function VerifyOtp(props) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <input required ref={inputRef} {...rest} />;
}

const SingleOTPInput = memo(VerifyOtp);
export default VerifyOtp;
