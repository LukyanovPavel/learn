import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {

    const arr1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
    ]

    const arr2 = [
        {id: 1, title: "HTML&CSS222", isDone: true},
        {id: 2, title: "JS222", isDone: true},
        {id: 3, title: "ReactJS2222", isDone: false},
        {id: 4, title: "Rest API22222", isDone: false},
        {id: 5, title: "GraphQL22222", isDone: false},
    ]

    return (
        <div className='App'>
            <TodoList topic1='What to learn? 111' arr={arr1}/>
            <TodoList topic2='What to learn? 222' arr={arr2}/>
        </div>

    );
}

export default App;
