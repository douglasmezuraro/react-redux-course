import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState()

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

            <SectionTitle title='Exercício #2' />
            <input type="text" className="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    );
};

export default UseState;
