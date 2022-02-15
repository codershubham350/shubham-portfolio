import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/coolshocker/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/codershubham350">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/shubham-saxena-5a83b516a/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/codershubham350">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M{" "}
              <span className="highlighted-text"> Shubham Saxena </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate Developer 🔥",
                    1000,
                    "Full-Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 🌐",
                    1000,
                    "React Developer ⚛️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Designing, Developing and Building applications with Front-end
                and Back-end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Shubham_Saxena_cv.pdf" download="Shubham Saxena.pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
