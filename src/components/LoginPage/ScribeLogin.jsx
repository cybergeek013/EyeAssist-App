import React from "react";
import Header from "./fields/Header";
import Slogin from "./fields/Slogin";

const ScribeLogin = () => {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Scribe Login"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/scribesignup"
          />
          <Slogin />
        </div>
      </div>
    </>
  );
};

export default ScribeLogin;
