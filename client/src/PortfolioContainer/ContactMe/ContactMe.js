import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../images/contact-us.gif";
import load1 from "../../images/load11.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import "./Footer.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading
          subHeading={"Let's keep in Touch"}
          title={"Contact Me"}
        />
        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <Typical
                loop={Infinity}
                steps={["Get in Touch 📧 ", 1000, "Connect with Me 🔗", 1000]}
              />
            </h2>
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
          <div className="back-form">
            <div className="img-back">
              <h4>Send your E-mail Here!</h4>
              <img src={imgBack} alt="Contact_Image" />
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleName}
                value={name}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={handleEmail}
                value={email}
              />
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                onChange={handleMessage}
                value={message}
              />

              <div className="send-btn">
                <button type="submit">
                  Send<i className="fa fa-paper-plane"></i>
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="load" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer id={props.id || ""}>
        <div className="top_header">
          <section>
            <span>
              <i className="fa fa-map-marker"></i>
            </span>
            <span>Dehradun, Uttarakhand</span>
          </section>
          <section>
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>(+91) 9758870240</span>
          </section>
          <section>
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <span>shubhamsaxena350@gmail.com</span>
          </section>
        </div>
        <span className="border-shape"></span>
        <div className="bottom_content">
          <section>
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
          </section>
          <section>
            <div
              className="bottom-div"
              onClick={() => ScrollService.scrollHandler.scrollToHome()}
            >
              Home
            </div>
            <div
              className="bottom-div"
              onClick={() => ScrollService.scrollHandler.scrollToAbout()}
            >
              About Me
            </div>
            <div
              className="bottom-div"
              onClick={() => ScrollService.scrollHandler.scrollToResume()}
            >
              Resume
            </div>
            <div
              className="bottom-div"
              onClick={() => ScrollService.scrollHandler.scrollToTest()}
            >
              Testimonial
            </div>
            <div
              className="bottom-div"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Contact Me
            </div>
          </section>
        </div>
        <div className="copyright">
          Copyright © 2022 Shubham - All rights reserved
        </div>
      </footer>
    </>
  );
}
