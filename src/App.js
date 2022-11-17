import React, { useContext } from "react";
import Routers from "./routes/Routers";

const App = () => {
  // return <div>{bool === 0 ? <ResetPassword /> : <VerifyOtp />}</div>;
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
