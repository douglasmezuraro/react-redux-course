import React from 'react';

const Select = ({ input, options, placeholder, readOnly }) => (
    <select {...input} className='form-control' placeholder={placeholder} disabled={readOnly}>
        <option />
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
);

export default Select;
