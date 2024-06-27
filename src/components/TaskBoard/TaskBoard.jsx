import { useState } from "react";
import List from "./List/List";

function TaskBoard({tasks:propsTasks}) {

    const [tasks, setTasks] = useState(propsTasks)

    const todoList = tasks.filter( task => task.status === 0 )
    const inProgressList = tasks.filter( task => task.status === 1 )
    const doneList = tasks.filter( task => task.status === 2 )
    
    return (
        <List list={tasks}/>
    );
}

export default TaskBoard;