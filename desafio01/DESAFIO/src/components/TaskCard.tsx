import { Trash } from "@phosphor-icons/react"
import style from "./TaskCard.module.css"

export function TaskCard() {
    return (
        <div className={style.taskCard}>
            <div className={style.taskCheckBox} />
            <div className={style.taskContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non iure veniam. Debitis consectetur maiores exercitationem sapiente, neque dolores soluta id aut ex sed deserunt harum ipsum quia, accusantium fuga.</div>
            <div><Trash color='var(--gray-300)' /></div>
        </div>
    )
}