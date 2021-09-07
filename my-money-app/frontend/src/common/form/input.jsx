import React from 'react';

//TODO: Adicionar parametrização para formatar como moeda, exemplo: http://jsfiddle.net/trixta/UC6tG/

const Input = ({ input, placeholder, readOnly, step, type }) => (
    <input {...input} className='form-control' placeholder={placeholder} readOnly={readOnly} step={step} type={type} />
);

export default Input;
