import { Context } from "../../store";
import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { getRandomInt } from "../../utils/funcs";

const AddNoteModal = () => {
  const { state, dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "MODAL_NOT_VISIBLE",
    });

    dispatch({
      type: "CREATE_NEW_TASK",
      payload: {
        id: state.tasksListData.length + 1,
        todo: inputValue,
        completed: false,
        userId: getRandomInt(100),
      },
    });
  };

  return (
    <div className={styles.AddNoteModal}>
      <form onSubmit={onHandleSubmit} className={styles.modalForm}>
        <input
          className={styles.newNoteInput}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="New note"
          value={inputValue}
          required
        />
        <input className={styles.uploadBtn} type="submit" value="Post" />
      </form>
    </div>
  );
};

export default AddNoteModal;
