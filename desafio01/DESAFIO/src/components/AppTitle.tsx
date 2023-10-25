import styles from "./AppTitle.module.css"
import rocket from "../assets/rocket.png"
import todo from "../assets/todo.png"

export function AppTitle() {
    return (
        <div className={styles.logo}>
            <img src={rocket} className={styles.rocketStyle} />
            <img src={todo} className={styles.todoStyle} />
        </div>
    );
}