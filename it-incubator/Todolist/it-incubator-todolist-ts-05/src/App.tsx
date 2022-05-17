import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskStateType = {
    [todolistsID: string]: Array<TaskType>
}

function App() {

    //BLL:
    const todolistsID_1 = v1()
    const todolistsID_2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistsID_1, title: 'What to learn', filter: "all"},
        {id: todolistsID_2, title: 'What to buy', filter: "all"},
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistsID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistsID_2]: [
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Meat", isDone: true},
            {id: v1(), title: "Cheeps", isDone: false},
            {id: v1(), title: "Toilet paper", isDone: false},
        ]
    })

    let [filter, setFilter] = useState<FilterValuesType>("all");


    const removeTask = (taskID: string, todolistID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== taskID)})
    }
    const addTask = (title: string, todolistID: string) => {
        const newTask: TaskType = {
            id: v1(), title, isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask,...tasks[todolistID]]})
    }
    const changeStatus = (taskID: string, isDone: boolean, todolistID: string) => {
        // const tasksForCurrentTodolist = tasks[todolistID]
        // const updatedTasks = tasksForCurrentTodolist.map(t => t.id === taskID ? {...t, isDone} : t)
        // const copyTasks = {...tasks}
        // copyTasks[todolistID] = updatedTasks
        // setTasks(copyTasks)  ------- полностью расписанный вариант

        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskID ? {...t, isDone} : t)})
    }
    const changeFilter = (filter: FilterValuesType, todolistsID: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistsID ? {...tl, filter} : tl))
    }
    const removeTaskTodolist = (todolistsID: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistsID))
        delete tasks[todolistsID]
    }
    //UI:


    const todolistsForRender = todolists.map(tl => {

        let tasksForTodolist = tasks[tl.id]; // весь массив
        if (tl.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }

        return (
            <Todolist
                key={tl.id}
                filter={tl.filter}
                title={tl.title}
                todolistID={tl.id}
                tasks={tasksForTodolist}

                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                removeTaskTodolist={removeTaskTodolist}
            />
        )
    })

    return (
        <div className="App">
            {todolistsForRender}
        </div>
    );
}

export default App;
