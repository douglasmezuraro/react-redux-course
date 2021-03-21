import React from "react";

const Random = props => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            <p>
                <strong>Valor mínimo:</strong> {min}.
            </p>
            <p>
                <strong>Valor máximo:</strong> {max}.
            </p>
            <p>
                <strong>Valor aleatório:</strong> {random}.
            </p>
        </div>
    );
};

export default Random;