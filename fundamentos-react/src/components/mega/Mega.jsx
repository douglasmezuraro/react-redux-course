import React, { useState } from "react";

const Mega = ({ count }) => {
    const [values, setValues] = useState(getArray())

    function getArray() {
        let array = [];
        while (array.length < count) {
            let value = parseInt(Math.random() * 99) + 1;
            if (!array.includes(value)) {
                array.push(value);
            };
        };
        return array.sort((a, b) => a - b);
    };

    function handleValues() {
        setValues(getArray());
    };

    return (
        <div>
            <h3>Resultado da MegaSena</h3>
            <div>
                {values.toString().replaceAll(',', ' ')}
            </div>
            <div>
                <button onClick={_ => handleValues()}>Sortear números</button>
            </div>
        </div>
    );
};

export default Mega;
