import React from 'react';
import Grid from '../layout/grid';

const ValueBox = ({ color, cols, icon, text, value }) => (
    <Grid cols={cols}>
        <div className={`small-box ${color}`}>
            <div className='inner'>
                <h3>{value}</h3>
                <p>{text}</p>
            </div>

            <div className='icon'>
                <i className={icon} />
            </div>
        </div>
    </Grid>
);

export default ValueBox;
