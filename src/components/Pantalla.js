import React from "react";
import Resetear from './Resetear'

const Pantalla = ({state, setState, botonDecimal, setBotonDecimal}) => {

    return (
        <div className="container_pantalla">
            <p id="numero">{state}</p>
            <Resetear state={state} setState={setState} botonDecimal={botonDecimal} setBotonDecimal={setBotonDecimal}/>
        </div>
    )
};

export default Pantalla;