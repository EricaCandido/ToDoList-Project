import { useContext } from "react";
import { Context } from "../../store";
import { calcPercCompletedTasks } from "../../utils/funcs";
import styles from "./index.module.scss";
import { partOfDay } from "../../utils/funcs";

const Hero = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.Hero}>
      <h1>{partOfDay()}</h1>
      <div className={styles.texts}>
        <div>
          <p>
            Today's {new Date().toLocaleString("en-US", { weekday: "long" })}
          </p>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div>
          <p>{calcPercCompletedTasks(state.tasksListData)}% Done</p>
          <span>Completed Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
