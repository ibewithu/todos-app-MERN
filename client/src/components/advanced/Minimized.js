import React from "react";
import { Link } from "react-router-dom";
import maximizeBg from "../../resources/backgroundImages/maximize-productivity.png";
import "./minimized.css";

const Minimized = () => {
  return (
    <div>
      <div className="home column">
        <div className="maximize-productivity column">
          <h2>Get Ready to Maximize Your Productivity With Seamless</h2>
          <h2> Management Of Your Day To Day Tasks </h2>

          <div>
            <Link to="/">
              <button>get started</button>
            </Link>
          </div>

          <img src={maximizeBg} alt="Loading..."></img>
        </div>
      </div>
    </div>
  );
};

export default Minimized;
