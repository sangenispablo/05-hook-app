import React from 'react';
import {useFetch} from '../../hooks/useFetch';

import './effects.css';

export const MultipleCustomHooks = () => {

    const state = useFetch("https://www.breakingbadapi.com/api/quotes/2");

    console.log(state);

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />

            <div className="alert alert-info text-center">
                Cargando...
            </div>

            <blockquote className="blockquote text-right">
                <p className="mb-0">
                    Hola Mundo
                </p>
                <footer>
                    
                </footer>
            </blockquote>

        </div>
    );
};