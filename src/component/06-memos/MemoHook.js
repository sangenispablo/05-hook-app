import React, {useMemo, useState} from 'react';
import {useCounterX1} from "../../hooks/useCounterX1";
import {procesoPesado} from "../../helpers/procesoPesado";

import './effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounterX1(2000);
    const [show, setShow] = useState();

    const memoProcesoPesado = useMemo(()=>{
        procesoPesado(counter);
    }, [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>
            <p>{memoProcesoPesado}</p>
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