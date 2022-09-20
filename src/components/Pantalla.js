import React from "react";
import Resetear from './Resetear'

const Pantalla = ({state, setState}) => {

    return (
        <div className="container_pantalla">
            <p id="numero">{state}</p>
            <Resetear state={state} setState={setState}/>
        </div>
    )
};

export default Pantalla;