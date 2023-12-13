import { PlusCircle } from '@phosphor-icons/react';
import styles from './App.module.css';
import { TaskSection } from './components/TaskSection';
import './global.css';
import { Logo } from './components/Logo';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState('')

  function handleNewTask() {
    setTask(event?.target.value)
    console.log('task:', task)
  }

  const [newText, setNewText] = useState([
    'teste 1',
    'teste 2'])

  function onHandleSubmit() {
    event?.preventDefault()



    setNewText([...newText, task])
    setTask('')

    console.log("ARRAY:", newText)
  }


  return (
    <div className={styles.appWrapper}>
      <header className={styles.appHeader}>
        <Logo />
        <form onSubmit={onHandleSubmit} className={styles.appInputSection}>
          <input type="text" name='text1' value={task} onChange={handleNewTask} placeholder='Adicione uma nova tarefa' />
          <button> Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <main className={styles.appMainSenction}>
        <TaskSection />
      </main>
    </div >
  )
}

export default App
