import React from "react";

const Operaciones = ({state, setState, acumulado, setAcumulado, operacion, setOperacion, setBotonDecimal}) => {

    const handleChange = (e) => {
        setAcumulado(state);
        setState('0');
        setBotonDecimal(false);

        if (e.target.value === '-') {
            setOperacion('resta');
        } else if (e.target.value === '+'){
            setOperacion('suma');
        } else if (e.target.value === '*'){
            setOperacion('multi');
        } else if (e.target.value === '/'){
            setOperacion('divi');
        }

        if (e.target.value === '=' && operacion === 'resta') {
            if ((parseFloat(acumulado) - parseFloat(state)) % 1 === 0) {
                setState(parseFloat(acumulado) - parseFloat(state));
            } else {
                setState((parseFloat(acumulado) - parseFloat(state)).toFixed(2))
            }
        } else if (e.target.value === '=' && operacion === 'suma') {
            if ((parseFloat(acumulado) + parseFloat(state)) % 1 === 0) {
                setState(parseFloat(acumulado) + parseFloat(state));
            } else {
                setState((parseFloat(acumulado) + parseFloat(state)).toFixed(2))
            }
        } else if (e.target.value === '=' && operacion === 'multi') {
            if ((parseFloat(acumulado) * parseFloat(state)) % 1 === 0) {
                setState(parseFloat(acumulado) * parseFloat(state));
            } else {
                setState((parseFloat(acumulado) * parseFloat(state)).toFixed(2))
            }
        } else if (e.target.value === '=' && operacion === 'divi') {
            if ((parseFloat(acumulado) / parseFloat(state)) % 1 === 0) {
                setState(parseFloat(acumulado) / parseFloat(state));
            } else {
                setState((parseFloat(acumulado) / parseFloat(state)).toFixed(2))
            }
        }
    }

    

    return (
        <div className="container_operaciones">
            <button value="=" onClick={handleChange}>=</button>
            <button value="*" onClick={handleChange}>x</button>
            <button value="-" onClick={handleChange}>-</button>
            <button value="+" onClick={handleChange}>+</button>
            <button value="/" onClick={handleChange}>/</button>
        </div>
    )
};

export default Operaciones;