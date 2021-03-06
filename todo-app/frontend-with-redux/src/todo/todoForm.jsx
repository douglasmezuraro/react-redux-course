import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import * as Actions from '../store/actions/todo';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    };

    componentDidMount() {
        this.props.search();
    };

    onKeyUp(e) {
        const { addTodo, clearDescription, description, search } = this.props;

        switch (e.key) {
            case 'Enter':
                return e.shiftKey ? search() : addTodo(description);
            case 'Escape':
                return clearDescription();
        };
    };

    render() {
        const { addTodo, clearDescription, description, search, setDescription } = this.props;

        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                        value={description} onChange={setDescription} onKeyUp={this.onKeyUp} />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton show={true} style='primary' title='Adicionar' icon='plus' onClick={() => addTodo(description)} />
                    <IconButton show={true} style='info' title='Pesquisar' icon='search' onClick={search} />
                    <IconButton show={true} style='warning' title='Limpar pesquisa' icon='close' onClick={clearDescription} />
                </Grid>
            </div>
        );
    };

};

const mapStateToProps = state => (
    {
        description: state.todo.description,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoForm);
