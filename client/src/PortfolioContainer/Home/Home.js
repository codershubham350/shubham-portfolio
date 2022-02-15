import React from "react";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";
import Profile from "./Profile/Profile";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
