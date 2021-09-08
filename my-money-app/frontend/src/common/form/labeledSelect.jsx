import React from 'react';

import Select from './select';
import Grid from '../layout/grid';

const LabeledSelect = ({ cols, disabled, input, label, name, options, placeholder }) => (
    <Grid cols={cols}>
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Select disabled={disabled} input={input} options={options} placeholder={placeholder} />
        </div>
    </Grid>
);

export default LabeledSelect;
