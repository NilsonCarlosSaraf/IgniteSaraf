import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';




export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post author=" Diego Fernandes" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magni perspiciatis laudantium cumque id atque similique consectetur nam distinctio recusandae aliquid, vero architecto quis dolorum aspernatur dolor in soluta pariatur." />
        <Post author="Gabriel Buzzi" content="A new post" />
        </main>
      </div>
    </div>

  )
}


