import { useContext } from "react";
import { Context } from "../../store";
import Task from "../task/Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData
        .sort((a, b) => (a.time > b.time ? 1 : a.time < b.time ? -1 : 0))
        .map((task) => (
          <Task taskData={task} key={task.id} />
        ))}
    </div>
  );
};

export default TasksList;
