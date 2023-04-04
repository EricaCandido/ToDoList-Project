import { useState, useEffect, useContext } from "react";
import { GET } from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";
import { MdOutlineDone } from "react-icons/md";
import { Context } from "../../store";

const Task = ({ taskData }) => {
  const [userData, setUserData] = useState({});
  const [complete, setComplete] = useState(taskData.completed);
  const { state } = useContext(Context);

  useEffect(() => {
    GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  }, []);

  const onHandleDoneBtn = () => {
    setComplete(!complete);
  };

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={userData.image} alt={userData.username} />
        {complete ? (
          <button onClick={onHandleDoneBtn} className={styles.done}>
            <MdOutlineDone />
          </button>
        ) : (
          <button onClick={onHandleDoneBtn} className={styles.done}></button>
        )}
      </div>
      <div className={styles.content}>
        <span>{userData.username}</span>
        <p>{taskData.todo}</p>
      </div>
      {console.log(state)}
    </div>
  );
};

export default Task;
