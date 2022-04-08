import React from "react";
import "./home.css";
import Minimized from "../advanced/Minimized";
import Create from "../advanced/Create";
import About from "../advanced/About";

const Home = () => {
  return (
    <div>
      <Create />
      <About />
      <Minimized />
    </div>
  );
};

export default Home;
