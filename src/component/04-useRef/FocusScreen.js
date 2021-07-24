import React, {useRef} from 'react';

import './effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick= () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="input1" className="form-label">Nombre Completo</label>
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control" id="input1"
                    placeholder="Ingrese su nombre aquí"
                />
            </div>
            <button
                className="btn btn-outline-primary"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
);
};