import React, { useState } from 'react'
import './Input.css'

function Input() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }
    const handleClick = () => {
        setTodoList([...todoList, newTask])
    }
  return (
    <div>
        <input className='input_bar' onChange={handleChange}/>
        <button onClick={handleClick}>Add To Task</button>
        {todoList.map((task)=>{
            return <h1>{task}</h1>
        })}
    </div>
  )
}

export default Input