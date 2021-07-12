import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/all';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleAdd() {
        const { description } = this.state;

        Axios.post(URL, { description }).then(response => {
            if (response.status == 201) {
                console.log('OK!');
            } else {
                console.log('Erro!');
            };
        });
    };

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList />
            </div>
        );
    };

};
