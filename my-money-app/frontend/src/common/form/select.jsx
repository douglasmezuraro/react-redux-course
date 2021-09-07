import React from 'react';

const Select = ({ input, options, placeholder, readOnly }) => (
    <select {...input} className='form-control' placeholder={placeholder} readOnly={readOnly}>
        {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
    </select>        
);

export default Select;
