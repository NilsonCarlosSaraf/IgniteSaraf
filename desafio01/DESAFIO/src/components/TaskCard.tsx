import { Check, Trash } from "@phosphor-icons/react"
import style from "./TaskCard.module.css"
import { useState } from "react"

export function TaskCard() {
    function handleTaskStatus() {
        if (taskStatus) {
            setTaskStatus(false)
        } else {
            setTaskStatus(true)
        }
    }

    const [taskStatus, setTaskStatus] = useState<boolean>()

    return (
        <div className={style.taskCard}>
            {taskStatus ? <div className={style.taskCheckBoxUntoggled} onClick={handleTaskStatus} /> : <div className={style.taskCheckBoxToggled} onClick={handleTaskStatus}><Check color="white" /></div>}
            <div style={taskStatus ? { textDecoration: 'none' } : { textDecoration: 'line-through' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non iure veniam. Debitis consectetur maiores exercitationem sapiente, neque dolores soluta id aut ex sed deserunt harum ipsum quia, accusantium fuga.</div>
            <button>
                <Trash size={16} />
            </button>
        </div>
    )
}