import React from 'react';

import Input from './input';
import Grid from '../layout/grid';

const LabeledInput = ({ cols, disabled, input, label, name, placeholder, type }) => (
    <Grid cols={cols}>
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Input disabled={disabled} input={input} placeholder={placeholder} type={type} />
        </div>
    </Grid>
)

export default LabeledInput;
