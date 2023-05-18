import React from 'react'

function Todo(props) {
  return (
    <div>
      {props.taskName}
      <button>Complete</button>
      <button onClick={() => props.handleDelete(props.id)}>X</button>

    </div>
  )
}

export default Todo