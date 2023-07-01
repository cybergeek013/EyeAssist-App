import React from "react";
import Header from "./fields/Header";
import Ssignup from "./fields/Ssignup";

const ScribeSignup = () => {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Signup as a Scribe"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/scribelogin"
          />
          <Ssignup />
        </div>
      </div>
    </>
  );
};

export default ScribeSignup;
