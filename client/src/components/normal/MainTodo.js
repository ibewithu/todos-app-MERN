import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./main-todo.css"

const MainTodo = (props) => {
  const {id} = useParams()
  const [todo, setTodo] = useState(
    {
      title: "",
      description: "",
      deadline: "",
      _id:""
    });
  useEffect(() => {
    fetch("/todo-list/" + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTodo(jsonRes));
  });
  return (
    <div className="column-container">
      <div className="main-container">
      <h2>Title: {todo.title}</h2>
      <h4>Description: {todo.description}</h4>
      <h5>Deadline: {todo.deadline}</h5>
      </div>
    </div>
  )
}  

export default MainTodo