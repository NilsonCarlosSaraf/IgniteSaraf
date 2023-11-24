import { ClipboardText } from '@phosphor-icons/react'
import styles from './TaskSection.module.css'
import { TaskCard } from './TaskCard'

export function TaskSection() {


    return (
        <div className={styles.taskList}>
            <div className={styles.taskCounterContainer}>
                <div className={styles.taskCounter1}>Tarefas Criadas <div>0</div></div>
                <div className={styles.taskCounter2}>Concluídas <div>2 de 5</div></div>
            </div>
            <div className={styles.tasksArea}>
                <ClipboardText color={'var(--gray-400)'} size={56} />
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens</p>
                </div>
                <TaskCard />
            </div>
        </div >
    )
}