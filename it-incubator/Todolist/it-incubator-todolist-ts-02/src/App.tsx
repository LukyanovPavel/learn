import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "RestAPI", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskID))
    }

    //
    // let filteredTask = tasks1;
    // const[filter, setFilter] = useState('All')
    // if (filter === 'Active'){
    //     filteredTask = tasks1.filter(el=>!el.isDone)
    // } else if (filter === 'Completed'){
    //     filteredTask = tasks1.filter(el=>el.isDone)
    // }
    // const changeFilter = (filterValue: string) => {
    //     setFilter(filterValue)
    // }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
