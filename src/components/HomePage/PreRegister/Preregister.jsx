import React from "react";
import Blind from "../../../assets/Blind.jpg";
import Scribe from "../../../assets/Scribe.jpg";

const Preregister = () => {
  return (
    <div className="bg-[--white_color]" name="preregister">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl font-bold tracking-tight text-[--medium_green] text-center">
          Are you ?
        </h2>
        <div className="flex lg:gap-0 gap-y-3 md:gap-x-5 justify-center m-4">
          <div className="shadow-2xl hover:opacity-60 rounded-lg w-80 text-center text-3xl font-bold text-[--medium_green] hover:text-[--orange_color]">
            <a href="/login">
              <img src={Blind} alt="Blind" />A Student
            </a>
          </div>
          <div className="shadow-2xl hover:opacity-60 rounded-lg w-80 text-center text-3xl font-bold text-[--medium_green] hover:text-[--orange_color]">
            <a href="/scribelogin">
              <img src={Scribe} alt="Scribe" />A Scribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preregister;
