import React, {useState} from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    // Desestructuro el state en lo que necesito y lo demas lo dejo como está
    const {counter1, counter2} = state;

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => {
                    // la expresion ..state es un spread es decir trae el objeto entero
                    // y con el counter1 le caigo encima a counter1 solamente
                    // lo fijo como si fuera lo inverso a la destructuracion
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    });
                }}
            >
                +1
            </button>
        </>
    );
};