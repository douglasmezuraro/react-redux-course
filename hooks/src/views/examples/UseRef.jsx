import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (a, b) => ([...a, ...b].sort());

const UseRef = () => {
    const [valueA, setValueA] = useState('');
    const [valueB, setValueB] = useState('');

    const counter = useRef(0);

    const editA = useRef(null);
    const editB = useRef(null);

    useEffect(() => {
        counter.current++;
        editB.current.focus();
    }, [valueA]);

    useEffect(() => {
        counter.current++;
        editA.current.focus();
    }, [valueB]);

    return (
        <div className='UseRef'>
            <PageTitle
                title='Hook UseRef'
                subtitle='Retorna um objeto mutável com a propriedade .current!'
            />

            <div className>
                <span className='text'>Valor: </span>
                <span className='text'>{merge(valueA, valueB)}</span>
                <span className='text'>[</span>
                <span className='text red'>{counter.current}</span>
                <span className='text'>]</span>
            </div>

            <SectionTitle title='Exercício #01' />
            <div className='center'>
                <input type='text' className='input' ref={editA} value={valueA} onChange={e => setValueA(e.target.value)} />
            </div>

            <SectionTitle title='Exercício #02' />
            <div className='center'>
                <input type='text' className='input' ref={editB} value={valueB} onChange={e => setValueB(e.target.value)} />
            </div>
        </div>
    );
};

export default UseRef;
