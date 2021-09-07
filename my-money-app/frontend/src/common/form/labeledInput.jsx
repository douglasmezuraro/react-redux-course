import React from 'react';

import Input from './input';
import Grid from '../layout/grid';

const LabeledInput = ({ cols, input, label, name, placeholder, readOnly, type }) => (
    <Grid cols={cols}>
        <div className='form-group'>
            <label htmlFor={name}>
                {label}
            </label>

            <Input input={input} placeholder={placeholder} readOnly={readOnly} type={type} />
        </div>
    </Grid>
)

export default LabeledInput;
