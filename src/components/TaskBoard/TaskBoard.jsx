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

  const panelClickHandle = function (id, status) {
    setTasks((prevState) =>
      prevState.map((item) => {
        if (item.id === id) item.status = status;
        return item;
      })
    );
  };

  const arhiveClickHandle = function (id) {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
  };

  const countItems = (list = []) => list.length ;

  const panels = [
    {
      title: TITLE_TODO,
      list: todoList,
      buttons: [
        {
          title: TITLE_PROGRESS,
          status: STATUS_PROGRESS,
          buttonClickHanlde: panelClickHandle,
        },
      ],
    },
    {
      title: TITLE_PROGRESS,
      list: inProgressList,
      buttons: [
        {
          title: TITLE_TODO,
          status: STATUS_TODO,
          buttonClickHanlde: panelClickHandle,
        },
        {
          title: TITLE_DONE,
          status: STATUS_DONE,
          buttonClickHanlde: panelClickHandle,
        },
      ],
    },
    {
      title: TITLE_DONE,
      list: doneList,
      buttons: [
        {
          title: TITLE_ARCHIVE,
          status: null,
          buttonClickHanlde: arhiveClickHandle,
        },
      ],
    },
  ];

  return (
    <div className="todos__container">
      {panels.map((panel, index) => (
        <List
          key={index}
          title={panel.title}
          list={panel.list}
          buttons={panel.buttons}
          countItems = {countItems}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
