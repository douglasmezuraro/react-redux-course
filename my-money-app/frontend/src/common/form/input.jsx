import React from 'react';

//TODO: Adicionar parametrização para formatar como moeda, exemplo: http://jsfiddle.net/trixta/UC6tG/

const Input = ({ input, placeholder, readOnly, step, type }) => (
    <input {...input} className='form-control' disabled={readOnly} placeholder={placeholder} step={step} type={type} />
);

export default Input;
