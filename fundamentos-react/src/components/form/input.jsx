import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("Valor inicial");
    
    return (
        <div className="Input">
            <input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );
};

export default Input;
