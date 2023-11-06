import { ClipboardText } from '@phosphor-icons/react';
import styles from './CreateTask.module.css'
import { CardTask } from './CardTask';

export function CreateTask() {
    return (
        <div className={styles.containerTask}>
            <div className={styles.tasksHeader}>
                <div className={styles.taskContainer1}>
                    <div>Tarefas criadas</div>
                    <div
                        className={styles.counter}>0</div>
                </div>
                <div className={styles.taskContainer}>
                    <div>Concluidas</div>
                    <div
                        className={styles.counter}>2 de 5</div>
                </div>
            </div>
            <div className={styles.bodyTasks}>
                <div className={styles.bodyText}>
                    <div>
                        <ClipboardText size={52} />
                    </div>
                    <p><strong>Voce ainda nao tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                    <CardTask />
                </div>
            </div>
        </div>

    );
}