import React from "react";
import "./create.css";
import createContent from "../../resources/backgroundImages/create-content.png";
import speed from "../../resources/icons/speed-security.png";
import flexibility from "../../resources/icons/flexibility-scalability.png";
import collaboration from "../../resources/icons/collaboration.png";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div className="row create-tab">
        <div className="column create-content">
          <div>
            <h1>Complete.</h1>
            <h1> Create. Collaborate.</h1>
          </div>

          <div>
            <h2>Todo-maker provides an effective and powerful</h2>
            <h2> way to manage your todo-list</h2>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/create">
              <button className="create-button">Create One</button>
            </Link>
            <Link to="todos-list">
              <button className="create-button">My todos -{">"} </button>
            </Link>
          </div>

          <div className="row feature-tab">
            <div>
              <img src={speed} alt="Loading..." />
              <span>Speed & Security</span>
            </div>
            <div>
              <img src={flexibility} alt="Loading..." />
              <span>Flexibility & Scalability</span>
            </div>
            <div> 
              <img src={collaboration} alt="Loading..." />
              <span>Collaborative</span>
            </div>
          </div>
        </div>

        <img src={createContent} alt="Loading..."></img>
      </div>
    </div>
  );
};

export default Create;
