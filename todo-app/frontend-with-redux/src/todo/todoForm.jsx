import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import * as TodoFormActions from '../store/actions/todo';

class TodoForm extends Component {
   
    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    };

    componentDidMount() {
        this.props.search();
    };

    onKeyUp(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? search() : this.props.onAdd();
        }
        else if (e.key === 'Escape') {
            this.props.onClear();
        };
    };

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                        value={this.props.description} onChange={this.props.setDescription} onKeyUp={this.onKeyUp} />
                </Grid>
    
                <Grid cols='12 3 2'>
                    <IconButton show={true} style='primary' title='Adicionar' icon='plus' onClick={this.props.onAdd} />
                    <IconButton show={true} style='info' title='Pesquisar' icon='search' onClick={this.props.search} />
                    <IconButton show={true} style='warning' title='Limpar pesquisa' icon='close' onClick={this.props.clearDescription} />
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

const mapDispatchToProps = dispatch => bindActionCreators(TodoFormActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);
