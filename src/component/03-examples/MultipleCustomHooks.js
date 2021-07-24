import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounterX1} from "../../hooks/useCounterX1";

import './effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounterX1(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // abajo utiliza una forma bastante particular de como negar doblemente un valor que
    // puede valer null
    const {author, quote, series} = !!data && data[0]

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr/>
            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Cargando...
                        </div>
                    ) :
                    (
                        <div>
                            <figure className="text-end">
                                <blockquote className="blockquote">
                                    <p>{quote}</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    {author} <cite title="Source Title">in {series}</cite>
                                </figcaption>
                            </figure>
                            <button
                                className="btn btn-primary mb-3"
                                onClick={increment}
                            >
                                Siguiente frase
                            </button>
                        </div>
                    )
            }

        </div>
    );
};