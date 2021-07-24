import React, {useState} from 'react';
import {useCounterX1} from "../../hooks/useCounterX1";
import {Small} from "./Small";

import './effects.css';

export const Memorize = () => {

    const {counter, increment} = useCounterX1(10);

    const [show, setShow] = useState();

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
}