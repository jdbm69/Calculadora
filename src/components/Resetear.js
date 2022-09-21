import React from "react";

const Resetear = ({setState, setBotonDecimal, setAcumulado}) => {

    const handleChange = (e) => {
        setState('0');
        setAcumulado('0');
        setBotonDecimal(false);
    }

    return (
        <div className="container_resetear">
            <button onClick={handleChange} value='0'>AC</button>
        </div>
    )
};

export default Resetear;