import React from "react";
import "./about.css"
import aboutCircle from "../../resources/icons/about-circle.png"
import aboutBg from "../../resources/backgroundImages/about-page.png"

const GetStarted = () => {
  return <div style={{ minHeight: "100vh" }}>

    <div className=" row container">

      <div className="column">
        <img src={aboutCircle} alt="Loading..." className="yellow1" />
        <h1>ABOUT ME &#128518;</h1>
        <h4 style={{ maxWidth: "50%", marginTop: "2%" }}>Undergraduate IT professional with expertise in JavaScript and C++ programming who is eager to apply all his knowledge  to real world computer programming solutions.</h4>
      </div>

      <div className="column both-image">
        <img src={aboutBg} alt="Loading..." />
        <img src={aboutCircle} alt="Loading..." className="yellow2" />
      </div>

    </div>

  </div>;
};

export default GetStarted;
