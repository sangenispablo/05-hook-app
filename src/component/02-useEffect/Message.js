import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({x: 0, y: 0})

    const {x, y} = coordenadas;

    useEffect(() => {

        //console.log('componente montado');

        const mouseMove = (e) => {
            const coordenadas = {x: e.x, y: e.y};
            // console.log(coordenadas);
            //console.log(':D');
            setCoordenadas(coordenadas);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);

    return (
        <div>
            <h3>Eres Genial !!!</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    );
};