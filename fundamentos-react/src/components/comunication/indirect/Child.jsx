import React from "react";

const Child = props => {
    const { onClick } = props;

    return (
        <div>
            <button onClick={_ => onClick("Douglas", "Mezuraro", "18/06/1996", "douglasmez@gmail.com")}>Enviar dados</button>
        </div >
    );
};

export default Child;
