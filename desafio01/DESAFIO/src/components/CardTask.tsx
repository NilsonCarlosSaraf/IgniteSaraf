import { Check, Trash } from '@phosphor-icons/react'
import styles from './CardTask.module.css'
import { useState } from 'react'

interface ICardTask {

}


export function CardTask() {

    const [checkBox, setCheckBox] = useState(true)


    function onSetCheckBox() {
        if (checkBox == true) {
            return (<div className={styles.checkBoxContainer} onClick={() => setCheckBox(false)}></div>)
        } else {
            return (
                <div>
                    <Check className={styles.checkBoxContainerTick} size={16} onClick={() => setCheckBox(true)} />
                </div>
            )
        }
    }


    return (
        <div className={styles.cardContainer}>
            {onSetCheckBox()}
            <p style={checkBox == true ? { textDecoration: "none" } : { textDecoration: "line-through" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga accusantium modi id impedit, quas dolore explicabo dolor voluptate quod inventore corporis ipsa suscipit omnis cumque placeat excepturi, nemo saepe!</p>

            <div>
                <button title='Deletar comentário'>
                    <Trash size={18} />
                </button>
            </div>

        </div >
    )
}