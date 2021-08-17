import { Task } from "./Task";

type TasksProps = {
  tasks: {
    title: string;
    completed: boolean;
    id: number;
  }[];
};

export function Tasks(props: TasksProps) {
  return (
    <>
      {props.tasks.map((task) => (
        <Task task={task} />
      ))}
    </>
  );
}
