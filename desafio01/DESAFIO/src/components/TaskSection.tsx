import { ClipboardText } from '@phosphor-icons/react'
import styles from './TaskSection.module.css'
import { TaskCard } from './TaskCard'

export function TaskSection() {
    const taskList = [
        {
            text: "Ama e faz o que quiseres. Se calares, calarás com amor; se gritares, gritarás com amor; se corrigires, corrigirás com amor; se perdoares, perdoarás com amor. Se tiveres o amor enraizado em ti, nenhuma coisa senão o amor serão os teus frutos.",
            id: 0
        },
        {
            text: "A medida do amor é amar sem medida.",
            id: 1
        },
        {
            text: "A beleza é realmente um bom dom de Deus; mas que os bons não pensem que ela é um grande bem, pois Deus a distribui mesmo para os maus.",
            id: 2
        },

    ]

    return (
        <div className={styles.taskList}>
            <div className={styles.taskCounterContainer}>
                <div className={styles.taskCounter1}>Tarefas Criadas <div>0</div></div>
                <div className={styles.taskCounter2}>Concluídas <div>2 de 5</div></div>
            </div>
            <div className={styles.tasksArea}>
                {taskList.length != 0 ?
                    taskList.map((task) => <TaskCard content={task.text} />)
                    : <div>
                        <ClipboardText color={'var(--gray-400)'} size={56} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens</p>
                        </div>
                    </div>}
            </div>
        </div >
    )
}