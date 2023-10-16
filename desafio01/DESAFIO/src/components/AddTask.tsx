import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css"


export function AddTask() {
    return (
        <div className={styles.divAdd}><input type="text" placeholder="Adicione uma nova tarefa" className={styles.inputAdd}/><button className={styles.buttonAdd}>Criar<PlusCircle /></button></div>
    )
}