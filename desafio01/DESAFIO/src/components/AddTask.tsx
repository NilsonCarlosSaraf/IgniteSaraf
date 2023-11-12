import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css"
import React, { useState } from "react";


export function AddTask({ }) {
    const [task, setTask] = useState('')

    function onAddTask(e: React.ChangeEvent<HTMLInputElement>) {

        setTask(e.target.value)
        console.log(task)


    }

    return (
        <form action="submit" className={styles.formAdd}>
            <div className={styles.divAdd}><input onChange={(e) => onAddTask(e)} type="text" placeholder="Adicione uma nova tarefa" className={styles.inputAdd} /><button className={styles.buttonAdd}>Criar<PlusCircle weight="bold" size={18} /></button></div>
        </form>
    )
}