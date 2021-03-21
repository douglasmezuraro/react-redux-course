import React from "react";

const EvenOrOdd = props => {
    const { value } = props;
    const isEven = value % 2 === 0;

    return (
        <div>
            <span>
                O número {value} é {isEven ? "par" : "ímpar"}
            </span>
        </div>
    );
};

export default EvenOrOdd;
