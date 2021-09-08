import React from 'react';

const Select = ({ disabled, input, options, placeholder }) => (
    <select {...input} className='form-control' disabled={disabled} placeholder={placeholder} >
        <option />
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
);

export default Select;
