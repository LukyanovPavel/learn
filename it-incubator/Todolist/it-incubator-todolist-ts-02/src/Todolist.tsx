import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}

export function Todolist(props: TodolistPropsType) {

    const[filter, setFilter] = useState('All')


    let filteredTask = props.tasks;


    if (filter === 'Active'){
        filteredTask = props.tasks.filter(el=>!el.isDone)
    } else if (filter === 'Completed'){
        filteredTask = props.tasks.filter(el=>el.isDone)
    }


    const changeFilter = (filterValue: string) => {
        setFilter(filterValue)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTask.map((el, index) => {
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>changeFilter('All')}>All</button>
            <button onClick={()=>changeFilter('Active')}>Active</button>
            <button onClick={()=>changeFilter('Completed')}>Completed</button>
        </div>
    </div>
}
