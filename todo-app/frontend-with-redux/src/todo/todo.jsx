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
        this.onMarkAsDone = this.onMarkAsDone.bind(this);
        this.onMarkAsPending = this.onMarkAsPending.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onRefresh = this.onRefresh.bind(this);

        this.onRefresh();
    };

    onAdd() {
        const { description } = this.state;
        Axios.post(URL, { description }).then(() => this.onRefresh());
    };

    onMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true, doneAt: Date.now() }).then(() => this.onRefresh(this.state.description));
    };

    onMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false, doneAt: null }).then(() => this.onRefresh(this.state.description));
    };

    onRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then(() => this.onRefresh(this.state.description));
    };

    onRefresh(description = '') {
        const filter = description ? `&description__regex=/${description}/` : '';
        Axios.get(`${URL}?sort=-createdAt?${filter}`).then(response => this.setState({ ...this.state, description, list: response.data }));
    };

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm onAdd={this.onAdd} />
                <TodoList
                    onMarkAsDone={this.onMarkAsDone}
                    onMarkAsPending={this.onMarkAsPending}
                    onRemove={this.onRemove} />
            </div>
        );
    };

};
