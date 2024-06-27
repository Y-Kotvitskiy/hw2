import { useState, useEffect } from "react";
import {
    STATUS_TODO,
    STATUS_PROGRESS,
    STATUS_DONE,
  } from "../constants/todos";
  import {
    TITLE_TODO,
    TITLE_PROGRESS,
    TITLE_DONE,
    TITLE_ARCHIVE,
  } from "../constants/todos";

  export default function useTaskBoard (propsTasks) {

    const [tasks, setTasks] = useState(propsTasks);
    const [todoList, setTodoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [doneList, setDoneList] = useState([]);
  
    useEffect(() => {
      setTodoList(tasks.filter((task) => task.status === STATUS_TODO));
    }, [tasks]);
  
    useEffect(() => {
      setInProgressList(tasks.filter((task) => task.status === STATUS_PROGRESS));
    }, [tasks]);
  
  
    useEffect(() => {
      setDoneList(tasks.filter((task) => task.status === STATUS_DONE));
    }, [tasks]);
  
  
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
    
     return panels;
      
  }