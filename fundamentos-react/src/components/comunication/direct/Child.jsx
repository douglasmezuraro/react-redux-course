import React from "react";

const Child = props => {
    const { name, lastName, birthdate, email } = props;

    return (
        <div>
            <p>Nome: {name} {lastName}</p>
            <p>Nascimento: {birthdate}</p>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default Child;
