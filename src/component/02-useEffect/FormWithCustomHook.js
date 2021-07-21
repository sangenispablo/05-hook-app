import React, {useEffect} from 'react';
import {useForm} from "../../hooks/useForm";

import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('el email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with CustomHook</h1>
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
            <div className="mb-3">
                <label htmlFor="Input3" className="form-label">Contraseña</label>
                <input
                    id="Input3"
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Guardar
                </button>
            </div>


        </form>
    );
};