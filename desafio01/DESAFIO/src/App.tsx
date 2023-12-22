import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";
import { TaskSection } from "./components/TaskSection";
import "./global.css";
import { Logo } from "./components/Logo";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  function handleNewTask() {
    setTask(event?.target.value);
    console.log("task:", task);
  }

  const [newText, setNewText] = useState([
    "Ama e faz o que quiseres. Se calares, calarás com amor; se gritares, gritarás com amor; se corrigires, corrigirás com amor; se perdoares, perdoarás com amor. Se tiveres o amor enraizado em ti, nenhuma coisa senão o amor serão os teus frutos.",
    "A medida do amor é amar sem medida.",
    "A beleza é realmente um bom dom de Deus; mas que os bons não pensem que ela é um grande bem, pois Deus a distribui mesmo para os maus.",
  ]);

  function onHandleSubmit() {
    event?.preventDefault();

    setNewText([...newText, task]);
    setTask("");

    console.log("ARRAY:", newText);
  }

  return (
    <div className={styles.appWrapper}>
      <header className={styles.appHeader}>
        <Logo />
        <form onSubmit={onHandleSubmit} className={styles.appInputSection}>
          <input
            type="text"
            name="text1"
            value={task}
            onChange={handleNewTask}
            placeholder="Adicione uma nova tarefa"
          />
          <button>
            {" "}
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <main className={styles.appMainSenction}>
        <TaskSection deleteFunction={() => console.log(newText)} taskContent={newText} />
      </main>
    </div>
  );
}

export default App;
