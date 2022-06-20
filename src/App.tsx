import { Header } from "./components/Header"
import { Task } from "./components/Task"
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  )
}

export default App
