import React from "react";

const Numeros = ({state, setState, botonDecimal, setBotonDecimal}) => {

    const handleChange = (e) => {
        if (state.length <= 9) {
            if (e.target.value === '.') {
                if (state === '0') {
                    setState('0.');
                    setBotonDecimal(true);
                } else {
                    setState(state + e.target.value);
                    setBotonDecimal(true);    
                }
            }       
    
            if (state === '0' && e.target.value !== '.') {
                setState(e.target.value)
            }

            if (state !== '0') {
                setState(state + e.target.value);
            }    
        } 
    }

    return (
        <div className="container_numeros">
            <button onClick={handleChange} value='7'>7</button>
            <button onClick={handleChange} value='8'>8</button>
            <button onClick={handleChange} value='9'>9</button>
            <button onClick={handleChange} value='4'>4</button>
            <button onClick={handleChange} value='5'>5</button>
            <button onClick={handleChange} value='6'>6</button>
            <button onClick={handleChange} value='1'>1</button>
            <button onClick={handleChange} value='2'>2</button>
            <button onClick={handleChange} value='3'>3</button>
            <button onClick={handleChange} id="cero" value='0'>0</button>
            <button onClick={handleChange} value='.' disabled={botonDecimal}>,</button>
        </div>
    )
};

export default Numeros;