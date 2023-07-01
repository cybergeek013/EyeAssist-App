import React from "react";
import "./about.css";
import AboutImg from "../../../assets/AboutImg.jpg";

const About = () => {
  return (
    <>
      <h1 id="about" className="main_heading">
        About Us
      </h1>
      <div className="about_page flexed">
        <div className="about_data">
          <h2 className="sub_heading">What does EyeAssist do?</h2>
          <p className="about_description">
            Welcome to{" "}
            <span
              style={{ fontWeight: "bolder", color: "var(--medium_green)" }}
            >
              EyeAssist
            </span>
            , a platform dedicated to empowering visually impaired students
            through the provision of scribes. We believe that every student
            deserves equal opportunities to excel academically, and we strive to
            bridge the gap between accessibility and education.
          </p>
          <h2 className="sub_heading">Our Mission</h2>
          <p className="about_description">
            At{" "}
            <span
              style={{ fontWeight: "bolder", color: "var(--medium_green)" }}
            >
              EyeAssist
            </span>
            , our mission is to ensure that visually impaired students can give
            their exams, thereby lead their life no less than usual people out
            in world. We understand the unique challenges faced by these
            students and are committed to providing them with the tools they
            need to succeed.
          </p>
          <div className="about_cards">
            <div className="card">
              <div className="card-header">50+</div>
              <div className="card-body">
                <div className="card-title">Students</div>
                <div className="card-text">
                  Found their scribe to write their exam
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">150+</div>
              <div className="card-body">
                <div className="card-title">Scribes</div>
                <div className="card-text">Available for writing exams</div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">4.0/5</div>
              <div className="card-body">
                <div className="card-title">Rated</div>
                <div className="card-text">By students and scribes</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={AboutImg} alt="" className="about_img" />
        </div>
      </div>
    </>
  );
};

export default About;
