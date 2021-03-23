import React from "react";

const Display = ({ value }) => (
    <div>
        <label htmlFor="valueInput"> Valor: </label>
        <input id="valueInput" value={value} readonly />
    </div>
);

export default Display;
