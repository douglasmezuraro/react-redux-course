import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
    number: 0,
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload.user };
        case 'add':
            return { ...state, number: state.number + 1 };
        default:
            return state;
    };
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='UseReducer'>
            <PageTitle title='Hook UseReducer' subtitle='Uma outra forma de ter estado em componentes funcionais!'>
                <div className='center'>
                    <span className='text'>{state.user ? state.user : 'Faça login'}</span>
                    <span className='text'>{state.number}</span>
                    <div>
                        <button className='btn' onClick={() => dispatch({ type: 'login', payload: { user: 'Meza' } })}>Login</button>
                        <button className='btn' onClick={() => dispatch({ type: 'add' })}>+1</button>
                    </div>
                </div>
            </PageTitle>
        </div>
    );
};

export default UseReducer;
