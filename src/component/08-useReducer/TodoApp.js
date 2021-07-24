import React, {useReducer} from 'react';
import {todoReducer} from "./todoReducer";

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">
                                        {i + 1}. {todo.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    accciones
                </div>
            </div>
        </div>
    );
};
