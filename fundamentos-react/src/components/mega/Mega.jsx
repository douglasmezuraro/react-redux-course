import React, { useState } from "react";

const Mega = ({ count }) => {
    const [values, setValues] = useState(sortNumbers)

    function sortNumbers() {
        let array = [];
        while (array.length < count) {
            let value = parseInt(Math.random() * 99) + 1;
            if (!array.includes(value)) {
                array.push(value);
            };
        };
        return array.sort((a, b) => a - b);
    };

    return (
        <div>
            <h2>MegaSena</h2>
            <div>
                {values.join(" ")}
            </div>
            <div>
                <button onClick={() => setValues(sortNumbers())}>Sortear números</button>
            </div>
        </div>
    );
};

export default Mega;
