import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import DataContext from '../../data/DataContext';

const UseContext = () => {
    const context = useContext(DataContext);
    const onClick = (value) => context.setState(
        {
            ...context.state,
            number: value,
        }
    );

    return (
        <div className='UseContext'>
            <PageTitle
                title='Hook UseContext'
                subtitle='Aceita um objeto de contexto e retorna o valor atual do contexto!'
            />
            <div className='center'>
                <span className='text'>{context.state.number}</span>
                <span className='text'>{context.state.text}</span>
                <div>
                    <button className='btn' onClick={() => onClick(context.state.number - 1)}>-1</button>
                    <button className='btn' onClick={() => onClick(0)}>0</button>
                    <button className='btn' onClick={() => onClick(context.state.number + 1)}>+1</button>
                </div>
            </div>
        </div>
    );
};

export default UseContext;
