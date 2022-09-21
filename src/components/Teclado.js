import React from "react";
import Numeros from './Numeros';
import Operaciones from './Operaciones'

const Teclado = ({state, setState, botonDecimal, setBotonDecimal, acumulado, setAcumulado, operacion, setOperacion}) => {
    return (
        <div className="container_teclado">
            <Numeros 
                state={state} 
                setState={setState} 
                botonDecimal={botonDecimal} 
                setBotonDecimal={setBotonDecimal}
                acumulado={acumulado}
            />
            <Operaciones 
                state={state} 
                setState={setState}
                acumulado={acumulado}
                setAcumulado={setAcumulado}
                operacion={operacion}
                setOperacion={setOperacion}
                setBotonDecimal={setBotonDecimal}
            />
        </div>
    )
};

export default Teclado;