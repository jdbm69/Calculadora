import React from "react";
import Numeros from './Numeros';
import Operaciones from './Operaciones'

const Teclado = ({state, setState}) => {
    return (
        <div className="container_teclado">
            <Numeros state={state} setState={setState}/>
            <Operaciones state={state} setState={setState}/>
        </div>
    )
};

export default Teclado;