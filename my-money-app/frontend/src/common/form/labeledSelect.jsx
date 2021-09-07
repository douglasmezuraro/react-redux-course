import React from 'react';

import Select from './select';
import Grid from '../layout/grid';

const LabeledSelect = ({ cols, input, label, name, options, placeholder, readOnly }) => (
    <Grid cols={cols}>
        <div className='form-group'>
            <label htmlFor={name}>
                {label}
            </label>

            <Select input={input} options={options} placeholder={placeholder} readOnly={readOnly} />
        </div>
    </Grid>
);

export default LabeledSelect;
