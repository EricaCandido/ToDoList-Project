import { useContext } from "react";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";
import { MdOutlineDone } from "react-icons/md";
import { Context } from "../../store";
import { FcFullTrash } from "react-icons/fc";

const Task = ({ taskData }) => {
  const { dispatch } = useContext(Context);

  const onHandleDoneBtn = () => {
    dispatch({ type: "SET_COMPLETED", payload: taskData.id });
  };

  const onHandleRemove = () => {
    dispatch({ type: "REMOVE_ITEM", payload: taskData.id });
  };

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <button className={styles.removeBtn} onClick={onHandleRemove}>
        <FcFullTrash />
        <p className={styles.removeText}>Remove</p>
      </button>
      <div className={styles.info}>
        <img src={taskData.image} alt={taskData.username} />
        <p className={styles.time}>{taskData.time}</p>
        {taskData.completed ? (
          <button onClick={onHandleDoneBtn} className={styles.done}>
            <MdOutlineDone />
          </button>
        ) : (
          <button onClick={onHandleDoneBtn} className={styles.done}></button>
        )}
      </div>
      <div className={styles.content}>
        <span>{taskData.username}</span>
        <p>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
