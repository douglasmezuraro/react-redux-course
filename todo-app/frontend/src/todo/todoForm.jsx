import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

const TodoForm = props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                value={props.description} onChange={props.onChange} />
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton show={true} style='primary' icon='plus' onClick={props.onAdd} />
            <IconButton show={true} style='info' icon='search' onClick={props.onSearch} />
            <IconButton show={true} style='warning' icon='close' onClick={props.onClear} /> 
        </Grid>
    </div>
);

export default TodoForm;
