import React, { useState } from "react";
import Pantalla from './Pantalla'
import Teclado from './Teclado'

const Calculadora = () => {

    const[state, setState] = useState('0');
    const[botonDecimal, setBotonDecimal] = useState(false);
    const[acumulado, setAcumulado] = useState('0');
    const[operacion, setOperacion] = useState('');

    return (
        <div className="container_calculadora">
            <Pantalla 
                state={state} 
                setState={setState} 
                setBotonDecimal={setBotonDecimal}
                setAcumulado={setAcumulado}
            />
            <Teclado 
                state={state} 
                setState={setState} 
                botonDecimal={botonDecimal} 
                setBotonDecimal={setBotonDecimal}
                acumulado={acumulado}
                setAcumulado={setAcumulado}
                operacion={operacion}
                setOperacion={setOperacion}
            />
        </div>
    )
};

export default Calculadora;