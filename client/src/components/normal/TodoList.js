import React, { useEffect, useState } from "react";
import "./todolist.css"
import Todo from "../advanced/Todo"
import {Link} from "react-router-dom"

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      title: "",
      description: "",
      deadline: "",
      _id:""
    }]);
  useEffect(() => {
    fetch("/todos-list")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTodos(jsonRes));
  });
  
  return (
    <div>
      <div className="outline column">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}

      </div>
      <div className="row back-btn">
        <button><Link to="/">Go Back</Link></button>
      </div>
    </div>
  );
};

export default TodoList;
