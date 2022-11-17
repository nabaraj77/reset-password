import React from "react";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";

import OTPForm from "../components/otpInput/OTPForm";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ResetPassword />} />
        <Route path="/verifyOtp" element={<OTPForm />} />
      </Routes>
    </div>
  );
};

export default Routers;
