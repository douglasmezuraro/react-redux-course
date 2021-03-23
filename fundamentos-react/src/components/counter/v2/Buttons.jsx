import React from "react";

const Buttons = ({ handleDec, handleReset, handleInc }) => (
    <div>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>0</button>
        <button onClick={handleInc}>+</button>
    </div>
);

export default Buttons;
