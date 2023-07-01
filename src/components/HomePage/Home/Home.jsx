import React from "react";
import { useState, useEffect } from "react";
import HomeImg from "../../../assets/homeImg.jpg";
import "./home.css";
import About from "../AboutUs/About";
import Feedback from "../FeedBack/Feedback";
import Footer from "../Footer/Footer";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = [" Scribe", " Support", " Accessibility"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 20);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setDelta(150);
    }
  };
  return (
    <>
      <div
        name="home"
        className="flex flex-col-reverse justify-evenly items-center p-5 lg:flex-row lg:pl-10 lg:h-full"
      >
        <div>
          <h1 className="leading-10 font-bold text-3xl text-[--medium_green] italic lg:text-6xl lg:leading-9">
            Eye<span className="text-[--orange_color]">Assist</span>{" "}
          </h1>

          <h5 className="text-2xl font-bold pt-1 lg:text-3xl lg:pt-6">
            We provide<span className="text-[--light_green]">{text}</span>
          </h5>
          <p className="text-black py-4 lg:max-w-4xl">
            We believe that every student deserves equal opportunities <br /> to
            excel academically, and we strive to bridge the gap <br /> between
            accessibility and education.
          </p>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center mt-4 text-lg text-[--orange_color] font- bold hover:text-[--dark_green] cursor-pointer"
          >
            Know more about us
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </ScrollLink>
        </div>
        <div className="w-full mt-8 lg:w-7/12 lg:float-right">
          <img
            src={HomeImg}
            alt="home image"
            className="w-full pointer-events-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <br />
        <br />
      </div>
      <About />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
