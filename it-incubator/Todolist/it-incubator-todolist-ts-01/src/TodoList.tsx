import React from "react";

type TodoListPropsType = {
    topic1?: string
    topic2?: string
    arr: Array<InArrayPropsType>
}

type InArrayPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.topic1}</h3>
                <h3>{props.topic2}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.arr.map(el => {
                            return <li key={el.id}><input type='checkbox' checked={el.isDone}/><span>{el.title}</span></li>
                        }
                        /*<li key={el.id}><input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span></li>*/)}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}