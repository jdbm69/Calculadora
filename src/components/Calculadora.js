import React, { useState } from "react";
import Pantalla from './Pantalla'
import Teclado from './Teclado'

const Calculadora = () => {

    const[state, setState] = useState('0');

    return (
        <div className="container_calculadora">
            <Pantalla state={state} setState={setState}/>
            <Teclado state={state} setState={setState}/>
        </div>
    )
};

export default Calculadora;