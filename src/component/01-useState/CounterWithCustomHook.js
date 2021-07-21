import React from 'react';
import {useCounter} from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    let initial = 0;

    const {state: contador, increment, decrement, reset} = useCounter(initial);

    let factor = 1;

    return (
        <>
            <h1>Counter with Custom Hook: {contador}</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={() => increment(factor)}
            >
                +{factor}
            </button>
            <button
                className="btn btn-danger"
                onClick={() => decrement(factor)}
            >
                -{factor}
            </button>
            <button
                className="btn btn-info"
                onClick={() => reset(initial)}
            >
                Reset to: {initial}
            </button>
        </>
    );
};