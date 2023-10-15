import  { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
<img 
className={styles.cover} 
src="https://images.unsplash.com/photo-1691338520808-c0b59d10e117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=45"/>

<div className={styles.profile}>
    <Avatar src="https://images.unsplash.com/photo-1692003122872-6400308772d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>

    <strong>Diego Fernandes</strong>
    <span>Web Developer</span>
</div>

<footer>
    <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
    </a>
</footer>
</aside>
    )

}