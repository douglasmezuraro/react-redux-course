import React from 'react';

const Input = ({ input, placeholder, readOnly, type }) => (
    <input {...input} className='form-control' placeholder={placeholder} readOnly={readOnly} type={type} />
);

export default Input;
