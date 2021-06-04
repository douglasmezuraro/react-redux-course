import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import useCounter from '../../hooks/UseCounter';

const UseRef = () => {
    const [counter, inc, dec] = useCounter();

    return (
        <div className='UseCustom'>
            <PageTitle title='Seu Hook' subtitle='Vamos aprender como criar o nosso próprio Hook!'>
                <SectionTitle title='Exercício #01'>
                    <div className='center'>
                        <span className='text'>{counter}</span>
                        <div>
                            <button className='btn' onClick={() => dec()}>-1</button>
                            <button className='btn' onClick={() => inc()}>+1</button>
                        </div>
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseRef;
