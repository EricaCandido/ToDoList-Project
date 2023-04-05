import { Context } from "../../store";
import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { getRandomInt } from "../../utils/funcs";

const AddNoteModal = () => {
  const { state, dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [usernameValue, setusernameValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "MODAL_VISIBLE",
    });

    dispatch({
      type: "CREATE_NEW_TASK",
      payload: {
        id: state.tasksListData.length + 1,
        username: usernameValue,
        todo: inputValue,
        completed: false,
        userId: getRandomInt(100),
        image: `https://robohash.org/${usernameValue}`,
      },
    });
  };

  const onHandleClickOverlay = () => {
    dispatch({
      type: "MODAL_VISIBLE",
    });
  };

  return (
    <div className={styles.AddNoteModal}>
      <div className={styles.overlay} onClick={onHandleClickOverlay}></div>
      <form onSubmit={onHandleSubmit} className={styles.modalForm}>
        <input
          className={styles.usernameInput}
          onChange={(e) => setusernameValue(e.target.value)}
          type="text"
          placeholder="Who's writing this note"
          value={usernameValue}
          required
        />

        <input
          className={styles.newNoteInput}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="New note"
          value={inputValue}
          required
        />
        <input className={styles.uploadBtn} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNoteModal;
