import { AddTask } from "./components/AddTask";


import styles from './App.module.css';

import './global.css';
import { AppTitle } from "./components/AppTitle";
import { CreateTask } from "./components/CreateTask";

function App() {

  return (
    <body>
      <header className={styles.styleHeader}>
        <AppTitle />
        <AddTask />
      </header>
      <CreateTask />
    </body>
  )
}

export default App
