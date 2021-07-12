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
        this.onAdd = this.onAdd.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onRefresh = this.onRefresh.bind(this);

        this.onRefresh();
    };

    onAdd() {
        const { description } = this.state;
        Axios.post(URL, { description }).then(() => this.onRefresh());
    };

    onChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    };

    onRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then(() => this.onRefresh());
    };

    onRefresh() {
        Axios.get(`${URL}?sort=createdAt`).then(response => this.setState({ ...this.state, description: '', list: response.data }));
    };

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} onAdd={this.onAdd} onChange={this.onChange} />
                <TodoList data={this.state.list} onRemove={this.onRemove} />
            </div>
        );
    };

};
