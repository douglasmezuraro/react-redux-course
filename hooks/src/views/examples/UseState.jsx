import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className='UseState'>
            <PageTitle
                title='Hook UseState'
                subtitle='Estado em componentes funcionais!'
            />
            <SectionTitle title='Exercício #1' />
            <div className="center">
                <span className='text'>
                    {counter}
                    <div>
                        <button className="btn" onClick={() => setCounter(counter - 1)}>-1</button>
                        <button className="btn" onClick={() => setCounter(counter + 1)}>+1</button>
                    </div>
                </span>
            </div>
        </div >
    );
};

export default UseState;
