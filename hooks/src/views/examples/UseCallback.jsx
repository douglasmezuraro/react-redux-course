import React, { useCallback, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import UseCallbackButtons from '../examples/UseCallbackButtons';

const UseCallback = () => {
    const [counter, setCounter] = useState(0);

    const inc = useCallback((delta) => setCounter(current => current + delta), [setCounter]);

    return (
        <div className='UseCallback'>
            <PageTitle
                title='Hook UseCallback'
                subtitle='Retorna uma função memoizada!'
            />
            <div className='center'>
                <span className='text'>{counter}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    );
};

export default UseCallback;
