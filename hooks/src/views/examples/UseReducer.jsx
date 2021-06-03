import React, { useReducer, useRef } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { Reducer, initialState } from '../../store';
import { add_2, add_n, div_25, mult_7, parse_int, login, logout } from '../../store/actions';

const UseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const editNumber = useRef(null);
    const editText = useRef(null);

    return (
        <div className='UseReducer'>
            <PageTitle title='Hook UseReducer' subtitle='Uma outra forma de ter estado em componentes funcionais!'>
                <SectionTitle title='Valores atuais'>
                    <div>
                        <span className='text'>Usuário: {state.user ? state.user : 'Faça login'}</span>
                    </div>
                    <div>
                        <span className='text'>Valor: {state.number}</span>
                    </div>
                </SectionTitle>

                <SectionTitle title='Logar/Deslogar'>
                    <div>
                        <input className='input' type='text' ref={editText} />
                        <button className='btn' onClick={() => login(dispatch, editText.current.value)}>Login</button>
                        <button className='btn' onClick={() => logout(dispatch)}>Logout</button>
                    </div>
                </SectionTitle>

                <SectionTitle title='Adicionar um número qualquer'>
                    <div>
                        <input className='input' type='number' ref={editNumber} />
                        <button className='btn' onClick={() => add_n(dispatch, editNumber.current.value)}>Add N</button>
                    </div>
                </SectionTitle>

                <SectionTitle title='Outras opções'>
                    <div>
                        <button className='btn' onClick={() => add_2(dispatch)}>+2</button>
                        <button className='btn' onClick={() => mult_7(dispatch)}>*7</button>
                        <button className='btn' onClick={() => div_25(dispatch)}>/25</button>
                        <button className='btn' onClick={() => parse_int(dispatch)}>Parse Int</button>
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseReducer;
