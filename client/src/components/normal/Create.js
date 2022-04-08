import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./create-main.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate()

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title or description fields are mandatory");
    } else {
      const newTodo = {
        title: title,
        description: description,
        deadline: deadline,
      };
      axios.post("/create", newTodo);
      setTitle("");
      setDescription("");
      setDeadline("");
      navigate(-1)
    }
  };

  return (
    <div style={{ maxHeight: "100vh" }}>
      <div className="container">
        <form action="" className="column form">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />

          <label htmlFor="">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            style={{ minHeight: "10vh" }}
          />

          <label htmlFor="">Deadline(if any)</label>
          <input
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            type="text"
          />

          <div className="row two-button">
            <Link to="/">
              <button className="form-button">Cancel</button>
            </Link>

            <Link to="/">
              <button className="form-button" onClick={handleAddTodo}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
