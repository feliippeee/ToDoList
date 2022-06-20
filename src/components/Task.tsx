import { v4 as uuidv4} from 'uuid';
import { Circle, Check, Trash} from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from "react";
import Clipboard from '../assets/Clipboard.svg';
import { NewTask} from '../components/NewTask';
import Add from '../assets/Add.svg';

import styles from './Task.module.css';

interface TaskProps {
    id: string;
    title: string;
    isChecked: boolean,
}

export function Task() {
    const [ tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTaskText, setNewTaskText] = useState('');    
    
    const completedTaskCounter = tasks.reduce((acc, task) =>{
        return acc + Number(task.isChecked)
    },0)

    
    
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        
         const taskCreate = {
             id: uuidv4(),
             title: newTaskText,
             isChecked: false,
         }
        setTasks([...tasks, taskCreate ]);
        console.log("create",taskCreate);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');

    }

    function handleDeleteTask(taskToDelete: string) {
        console.log('taskToDelete', taskToDelete);
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete);
        console.log('tasksWithout', tasksWithoutDeletedOne)
        setTasks(tasksWithoutDeletedOne);
        
    }
    
    function handleUpdateTaskStatus(id: string) {
        const updatedTasks = tasks.map(task => task.id == id ? {
            ...task, isChecked: !task.isChecked
          } : task);
          setTasks(updatedTasks);
        }
    
    const isNewTaskEmpty = tasks === null || tasks.length === 0
    
    return (
        <div className={styles.content} >

                <form onSubmit={handleCreateNewTask} className={styles.commentForm}>
                        <input 
                            name="task"
                            placeholder="Adicione uma nova tarefa"
                            value={newTaskText}
                            onChange={handleNewTaskChange}
                            onInvalid={handleNewTaskInvalid}
                            required
                        />
                        <footer>
                            <button type="submit">
                                Criar
                                <img src={Add} alt="" />
                            </button>
                        </footer>

                    </form>
                    <div className={styles.container}>
            <div className={styles.headerTaksTitle}>
                <div>Tarefas criadas <span>{tasks.length}</span></div>
                <div>Concluídas <span>{ tasks.length > 0 ? `${completedTaskCounter} de ` : '' } {tasks.length}</span></div>
            </div>
                { isNewTaskEmpty ?
            <footer>
                <img src={Clipboard} alt="imagem de uma lista vazia" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
        
            
            </footer>
                :
                tasks.map(task => {
                    return (
                        <NewTask 
                            key={task.id}
                            onDeleteTask={handleDeleteTask}
                            handleUpdateTaskStatus={handleUpdateTaskStatus}
                            title={task.title}
                            id={task.id}
                            isChecked={task.isChecked}
                        />
                        
                        )
                    })
                }           
            
                </div>

        </div>
    )
}