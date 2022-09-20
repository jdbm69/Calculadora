import React from "react";

const Resetear = ({state, setState}) => {

    const handleChange = (e) => {
        setState(e.target.value);
    }

    return (
        <div className="container_resetear">
            <button onClick={handleChange} value='0'>AC</button>
        </div>
    )
};

export default Resetear;