import React, { useState } from 'react'
import './Input.css'
import Todo from '../Todo/Todo';

function Input() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }
    const handleClick = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
            taskName: newTask
        }
        setTodoList([...todoList, task])
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter((task) =>  task.id !== id))
    }
  return (
    <div className='input_main'>
        <input className='input_bar' onChange={handleChange}/>
        <button onClick={handleClick}>Add To Task</button>
        
        <div className='task_division'>
            <div className='added_task'>
                Tasks Added
                {todoList.map((task)=> {
                    return (<div>
                        <Todo taskName={task.taskName} id={task.id} handleDelete={handleDelete}/>
                        </div>)
                })}
            </div>
            <div className='completed_task'>Completed Tasks</div>
        </div>
    </div>
  )
}

export default Input