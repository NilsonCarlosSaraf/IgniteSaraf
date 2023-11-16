import styles from './Logo.module.css'
import rocket from './../assets/rocket.svg'
import todo from './../assets/todo.svg'

export function Logo() {
    return (
        <div className={styles.todoStyle}>
            <div><img src={rocket} alt="" /></div>
            <div><img src={todo} alt="" /></div>
        </div>
    )
}