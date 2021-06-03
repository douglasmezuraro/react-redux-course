import React, { useReducer, useRef } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    number: 0,
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload.user };
        case 'add_2':
            return { ...state, number: state.number + 2 };
        case 'add_n':
            return { ...state, number: parseInt(state.number) + parseInt(action.payload.n) }
        case 'mult_7':
            return { ...state, number: state.number * 7 };
        case 'div_25':
            return { ...state, number: state.number / 25 };
        case 'parse_int':
            return { ...state, number: parseInt(state.number) };
        default:
            return state;
    };
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

                <SectionTitle title='Logar'>
                    <div>
                        <input className='input' type='text' ref={editText} />
                        <button className='btn' onClick={() => dispatch({ type: 'login', payload: { user: editText.current.value } })}>Login</button>
                    </div>
                </SectionTitle>

                <SectionTitle title='Adicionar um número qualquer'>
                    <div>
                        <input className='input' type='number' ref={editNumber} />
                        <button className='btn' onClick={() => dispatch({ type: 'add_n', payload: { n: editNumber.current.value } })}>Add N</button>
                    </div>
                </SectionTitle>

                <SectionTitle title='Outras opções'>
                    <div>
                        <button className='btn' onClick={() => dispatch({ type: 'add_2' })}>+2</button>
                        <button className='btn' onClick={() => dispatch({ type: 'mult_7' })}>*7</button>
                        <button className='btn' onClick={() => dispatch({ type: 'div_25' })}>/25</button>
                        <button className='btn' onClick={() => dispatch({ type: 'parse_int' })}>Parse Int</button>
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseReducer;
