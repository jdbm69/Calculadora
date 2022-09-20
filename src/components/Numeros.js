import React from "react";

const Numeros = ({state, setState}) => {

    const handleChange = (e) => {

        if (state.length <= 9) {
            if (state === '0') {
                if (e.target.value !== ',') {
                    setState(e.target.value);    
                }
            } else {
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
            <button onClick={handleChange} value=','>,</button>
        </div>
    )
};

export default Numeros;