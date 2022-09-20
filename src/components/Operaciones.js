import React from "react";

const Operaciones = ({state, setState}) => {
    return (
        <div className="container_operaciones">
            <button value="/">/</button>
            <button value="*">x</button>
            <button value="-">-</button>
            <button value="/+">+</button>
        </div>
    )
};

export default Operaciones;