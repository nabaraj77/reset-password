import React, { useContext } from "react";
import ResetPassword from "./components/ResetPassword";
import VerifyOtp from "./components/VerifyOtp";
import { BoolContext } from "./context/value";

const App = () => {
  const { bool } = useContext(BoolContext);
  console.log(bool);

  // let bool = 0;
  return <div>{bool === 0 ? <ResetPassword /> : <VerifyOtp />}</div>;
};

export default App;
