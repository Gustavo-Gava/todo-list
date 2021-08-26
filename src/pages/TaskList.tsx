import React, { useState, createContext } from "react"
import { Tasks } from "../components/Tasks"
import "../assets/styles/TaskList.css"

type TasksContextProps = {
  tasks: {
    title: string
    completed: boolean
    id: number
  }[]
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        title: string
        completed: boolean
        id: number
      }[]
    >
  >
}

export const TasksContext = createContext({} as TasksContextProps)

export function TaskList() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([
    {
      title: "Study React",
      completed: false,
      id: Math.random(),
    },
    {
      title: "Read",
      completed: false,
      id: Math.random(),
    },
  ])

  function handleTaskClick() {
    if (input.trim() == "") {
      alert("Please Enter a Task!")
      return
    }

    setTasks([...tasks, { title: input, completed: false, id: Math.random() }])
    setInput("")
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="body">
        <div className="main-container">
          <h2>Todo App</h2>
          <div className="container-add-task">
            <input
              type="text"
              placeholder="Add your new todo"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button onClick={handleTaskClick}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          <Tasks tasks={tasks} />
        </div>
      </div>
    </TasksContext.Provider>
  )
}
