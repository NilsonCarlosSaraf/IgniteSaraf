import { Trash } from '@phosphor-icons/react'
import styles from './CardTask.module.css'

interface ICardTask {

}

export function CardTask() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.checkBox}><input type="checkbox" /></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga accusantium modi id impedit, quas dolore explicabo dolor voluptate quod inventore corporis ipsa suscipit omnis cumque placeat excepturi, nemo saepe!</p>

            <button title='Deletar comentario'>
                <Trash size={18} />
            </button>

        </div>
    )
}