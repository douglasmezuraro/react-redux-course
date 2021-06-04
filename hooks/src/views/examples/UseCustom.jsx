import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const UseRef = () => {
    const [counter, inc, dec] = useCounter();
    const response = useFetch('get', 'http://files.cod3r.com.br/curso-react/estados.json');

    const showStates = states => states.map(state =>
        <tr>
            <td>{state.nome}</td>
            <td>{state.sigla}</td>
        </tr>
    );

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

                <SectionTitle title='Exercício #02'>
                    <div className='center'>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Sigla</th>
                            </tr>
                            {response.data ? showStates(response.data) : null}
                        </table>
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseRef;
