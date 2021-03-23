import React from "react";

const Step = ({ step, handleStep }) => (
    <div>
        <label htmlFor="stepInput"> Passo: </label>
        <input id="stepInput" type="number" value={step} onChange={handleStep} />
    </div>
);

export default Step;
