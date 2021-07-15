import React from 'react';
import { connect } from 'react-redux';

import IconButton from '../template/iconButton';

const TodoList = props => {
    const { data } = props;

    const renderRows = () => data.map(todo => {
        const className = todo.done ? 'markedAsDone' : '';
        const title = `Criado em: ${todo.createdAt}\n` + (todo.done ? `Finalizado em: ${todo.doneAt}` : '');

        return (
            <tr key={todo._id}>
                <td className={className} title={title}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='success' title='Marcar como concluído' icon='check' show={!todo.done} onClick={() => props.onMarkAsDone(todo)} />
                    <IconButton style='warning' title='Marcar como pendente' icon='undo' show={todo.done} onClick={() => props.onMarkAsPending(todo)} />
                    <IconButton style='danger' title='Remover' icon='trash-o' show={todo.done} onClick={() => props.onRemove(todo)} />
                </td>
            </tr>
        );
    });

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th className='tableActions'>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => (
    {
        data: state.todo.data,
    }
);

export default connect(mapStateToProps)(TodoList);
