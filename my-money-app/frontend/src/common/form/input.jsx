import React from 'react';

//TODO: Adicionar parametrização para formatar como moeda, exemplo: http://jsfiddle.net/trixta/UC6tG/

const Input = ({ disabled, input, placeholder, step, type }) => (
    <input {...input} className='form-control' disabled={disabled} placeholder={placeholder} step={step} type={type} />
);

export default Input;
