import { Circle,Check, Trash } from 'phosphor-react';

import styles from './NewTask.module.css';

interface Task {
    id: string;
    isChecked: string;


}

interface TaskProps {
    task?: string;
    id: string;
    title: string;
    isChecked: boolean;
    handleUpdateTaskStatus: (task: string) => void;
    onDeleteTask: (task: string) => void;
}
export function NewTask({task, title, id, isChecked, handleUpdateTaskStatus, onDeleteTask}: TaskProps) {

    function handleDeleteTask(id: string) {
        onDeleteTask(id)
    }
    console.log('isChecked',isChecked)
    return (
        <div className={styles.containerButton} key={id}>
        <div className={styles.newTask}>
            <div className={styles.img} onClick={() => handleUpdateTaskStatus(id)}>
                <div className={styles.svg}> 
                    {isChecked ? <Check className={isChecked ? styles.svgActive : ''} /> :<Circle />} 
                </div>
            </div>
            <p className={isChecked ? styles.taskLineActive: ''}>{ title}</p>
            <div>
                <div className={styles.trash}>
                    <Trash size={16} weight="light" onClick={() => handleDeleteTask(id)} /> 

                </div>

            </div>
   
        </div>
            
    </div>
    )
}