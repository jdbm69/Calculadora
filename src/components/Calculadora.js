import React, { useState } from "react";
import Pantalla from './Pantalla'
import Teclado from './Teclado'

const Calculadora = () => {

    const[state, setState] = useState('0');
    const[botonDecimal, setBotonDecimal] = useState(false);

    return (
        <div className="container_calculadora">
            <Pantalla state={state} setState={setState} botonDecimal={botonDecimal} setBotonDecimal={setBotonDecimal}/>
            <Teclado state={state} setState={setState} botonDecimal={botonDecimal} setBotonDecimal={setBotonDecimal}/>
        </div>
    )
};

export default Calculadora;