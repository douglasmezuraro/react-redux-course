import React from 'react';

const Input = ({ input, placeholder, readOnly, step, type }) => (
    <input {...input} className='form-control' placeholder={placeholder} readOnly={readOnly} step={step} type={type} />
);

export default Input;
