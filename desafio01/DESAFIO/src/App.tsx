import { PlusCircle } from '@phosphor-icons/react';
import styles from './App.module.css';
import { TaskSection } from './components/TaskSection';
import './global.css';
import { Logo } from './components/Logo';

function App() {

  return (
    <div className={styles.appWrapper}>
      <header className={styles.appHeader}>
        <Logo />
        <div className={styles.appInputSection}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button> Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </header>
      <main className={styles.appMainSenction}>
        <TaskSection />
      </main>
    </div >
  )
}

export default App
