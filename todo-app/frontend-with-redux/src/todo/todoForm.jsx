import React from 'react';
import { connect } from 'react-redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

const TodoForm = props => {

    const { description } = props;

    const onKeyUp = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.onSearch() : props.onAdd();
        }
        else if (e.key === 'Escape') {
            props.onClear();
        };
    };

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                    value={description} onChange={props.onChange} onKeyUp={onKeyUp} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton show={true} style='primary' title='Adicionar' icon='plus' onClick={props.onAdd} />
                <IconButton show={true} style='info' title='Pesquisar' icon='search' onClick={props.onSearch} />
                <IconButton show={true} style='warning' title='Limpar pesquisa' icon='close' onClick={props.onClear} />
            </Grid>
        </div>
    );
};

const mapStateToProps = state => (
    {
        description: state.todo.description,
    }
);

export default connect(mapStateToProps)(TodoForm);
