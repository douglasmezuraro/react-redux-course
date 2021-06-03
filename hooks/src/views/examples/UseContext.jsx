import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import DataContext from '../../data/DataContext';
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';

const UseContext = () => {
    const context = useContext(DataContext);
    const onClick = (value) => context.setState({ ...context.state, number: value, });
    const { number, setNumber, text } = useContext(AppContext);

    return (
        <div className='UseContext'>
            <PageTitle title='Hook UseContext' subtitle='Aceita um objeto de contexto e retorna o valor atual do contexto!'>
                <SectionTitle title='Exercício #01'>
                    <div className='center'>
                        <span className='text'>{context.state.number}</span>
                        <span className='text'>{context.state.text}</span>
                        <div>
                            <button className='btn' onClick={() => onClick(context.state.number - 1)}>-1</button>
                            <button className='btn' onClick={() => onClick(0)}>0</button>
                            <button className='btn' onClick={() => onClick(context.state.number + 1)}>+1</button>
                        </div>
                    </div>
                </SectionTitle>

                <SectionTitle title='Exercício #2'>
                    <div className='center'>
                        <span className='text'>{number}</span>
                        <span className='text'>{text}</span>
                        <div>
                            <button className='btn' onClick={() => setNumber(number - 1)}>-1</button>
                            <button className='btn' onClick={() => setNumber(0)}>0</button>
                            <button className='btn' onClick={() => setNumber(number + 1)}>+1</button>
                        </div>
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseContext;
