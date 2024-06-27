import { useState } from "react";
import List from "./List/List";
import {
  STATUS_TODO,
  STATUS_PROGRESS,
  STATUS_DONE,
} from "../../constants/todos";
import {
  TITLE_TODO,
  TITLE_PROGRESS,
  TITLE_DONE,
  TITLE_ARCHIVE,
} from "../../constants/todos";
import "./TaskBoard.css";

function TaskBoard({ tasks: propsTasks }) {
  const [tasks, setTasks] = useState(propsTasks);

  const todoList = tasks.filter((task) => task.status === 0);
  const inProgressList = tasks.filter((task) => task.status === 1);
  const doneList = tasks.filter((task) => task.status === 2);

  const panels = [
    { title: TITLE_TODO, list: todoList },
    { title: TITLE_PROGRESS, list: inProgressList },
    { title: TITLE_DONE, list: doneList },
  ];

  return (
    <div className="todos__container">
      {panels.map((panel, index) => (
        <List key={index} title={panel.title} list={panel.list} />
      ))}
    </div>
  );
}

export default TaskBoard;
