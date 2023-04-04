import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import AddNoteModal from "./components/addNoteModal";
import styles from "./App.module.scss";
import { TbTextPlus } from "react-icons/tb";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleAddButton = () => dispatch({ type: "MODAL_VISIBLE" });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        {state.isModalVisibile && <AddNoteModal />}

        <TasksList />

        <button onClick={onHandleAddButton} className={styles.addTodo}>
          <TbTextPlus />
        </button>
      </Context.Provider>
    </div>
  );
}

export default App;
