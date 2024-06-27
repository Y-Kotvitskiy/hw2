import List from "./List/List";
import "./TaskBoard.css";
import useTaskBoard from "../../hooks/TaskBoard";

function TaskBoard({ tasks: propsTasks }) {
  const panels = useTaskBoard(propsTasks);

  const countItems = (list = []) => list.length;

  return (
    <div className="todos__container">
      {panels.map((panel, index) => (
        <List
          key={index}
          title={panel.title}
          list={panel.list}
          buttons={panel.buttons}
          countItems={countItems}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
