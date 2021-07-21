import React, {useEffect, useState} from 'react';
import {Message} from "./Message";

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    // Este efecto se dispara solo cuando el componente se monta (es decir una sola vez)
    useEffect(() => {
        // console.log('hey');
    }, []);

    // Este efecto se dispara cuando el formState cambie (es decir cuando se cambie name o email)
    useEffect(() => {
        // console.log('el formState cambió');
    }, [formState]);

    // Este efecto se dispara cuando solamente el Email cambia
    useEffect(() => {
        // console.log('el Email cambió');
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="Input1" className="form-label">Nombre Completo</label>
                <input
                    id="Input1"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingresa un nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Input2" className="form-label">Correo Electronico</label>
                <input
                    id="Input2"
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tunombre@correo.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name === '123' && <Message/>}
        </>
    );
};