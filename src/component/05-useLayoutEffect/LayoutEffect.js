import React, {useLayoutEffect, useRef, useState} from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounterX1} from "../../hooks/useCounterX1";

import './effects.css';

export const LayoutEffect = () => {

    const {counter, increment} = useCounterX1(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0]

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            <div>
                <blockquote className="blockquote">
                    <p
                        ref={pTag}
                    >
                        {quote}
                    </p>
                </blockquote>

                <pre>
                    { JSON.stringify(boxSize, null, 3) }
                </pre>

                <button
                    className="btn btn-primary mb-3"
                    onClick={increment}
                >
                    Siguiente frase
                </button>
            </div>
        </div>
    );
};