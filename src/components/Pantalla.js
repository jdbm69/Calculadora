import React from "react";
import Resetear from './Resetear'

const Pantalla = ({state, setState, setBotonDecimal, setAcumulado}) => {

    return (
        <div className="container_pantalla">
            <p id="numero">{state}</p>
            <Resetear  
                setState={setState}  
                setBotonDecimal={setBotonDecimal}
                setAcumulado={setAcumulado}
            />
        </div>
    )
};

export default Pantalla;