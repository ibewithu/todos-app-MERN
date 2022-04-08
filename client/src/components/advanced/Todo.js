import React from 'react'
import { Link } from 'react-router-dom'
import "./todo.css"
import axios from 'axios'

const Todo = ({todo}) => {
  const handleDelete = (id)=>{
axios.delete("/todos-list/" + id)
  }
  return (
    <div>
        <div className="each-todo column">
            <h3><Link to={`/todos-list/${todo._id}`}>Title: {todo.title} </Link> </h3>
            <p> Description: {todo.description}</p>
            <h5> Deadline: {todo.deadline} </h5>
        <button onClick={()=>handleDelete(todo._id)} style={{marginLeft: "10%", padding: "0.5%", backgroundColor: "black", color: "white", cursor: "pointer", width: "15%"}}>Delete</button> 
        </div>
    </div>
  )
}
     
export default Todo