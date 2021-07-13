import React from 'react';

import IconButton from '../template/iconButton';

const TodoList = props => {

    const renderRows = () => {
        const { data } = props || [];

        return data.map(todo =>
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='success' title='Marcar como concluído' icon='check' show={!todo.done} onClick={() => props.onMarkAsDone(todo)} />
                    <IconButton style='warning' title='Marcar como pendente' icon='undo' show={todo.done} onClick={() => props.onMarkAsPending(todo)} />
                    <IconButton style='danger' title='Remover' icon='trash-o' show={todo.done} onClick={() => props.onRemove(todo)} />
                </td>
            </tr>
        );
    };

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

export default TodoList;
