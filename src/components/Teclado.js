import React from "react";
import Numeros from './Numeros';
import Operaciones from './Operaciones'

const Teclado = ({state, setState, botonDecimal, setBotonDecimal}) => {
    return (
        <div className="container_teclado">
            <Numeros state={state} setState={setState} botonDecimal={botonDecimal} setBotonDecimal={setBotonDecimal}/>
            <Operaciones state={state} setState={setState}/>
        </div>
    )
};

export default Teclado;