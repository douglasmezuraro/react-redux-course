import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    function callback(name, lastName, birthdate, email) {
        setName(name);
        setLastName(lastName);
        setBirthdate(birthdate);
        setEmail(email);
    }

    return (
        <div>
            <div>
                <p>Nome: {name} {lastName}</p>
                <p>Nascimento: {birthdate}</p>
                <p>E-mail: {email}</p>
            </div>
            <Child onClick={callback} />
        </div>
    );
}

export default Parent;
