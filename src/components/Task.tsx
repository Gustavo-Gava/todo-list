import { useContext } from "react";

import { TasksContext } from "../pages/TaskList";

import "../assets/styles/Task.css";

type id = number;

type TasksProps = {
  task: {
    title: string;
    completed: boolean;
    id: number;
  };
};

export function Task(props: TasksProps) {
  const { tasks, setTasks } = useContext(TasksContext);

  function handleDeleteClick(id: id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleCheckedClick(id: id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    console.log(Math.random());
    setTasks(newTasks);
  }

  return (
    <div className="container-task">
      <span
        className="container-task-name"
        style={
          props.task.completed
            ? { textDecoration: "line-through" }
            : {
                textDecoration: "none",
              }
        }
      >
        <input
          type="checkbox"
          name="task-completed"
          onClick={() => handleCheckedClick(props.task.id)}
        />
        <span>{props.task.title}</span>
      </span>
      <span>
        <i
          className="fa fa-times"
          onClick={() => handleDeleteClick(props.task.id)}
        ></i>
      </span>
    </div>
  );
}
