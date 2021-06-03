import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (x, y) => ([...x, ...y].sort());

const UseRef = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const counter = useRef(0);

    const editA = useRef(null);
    const editB = useRef(null);

    useEffect(() => {
        counter.current++;
        editB.current.focus();
    }, [a]);

    useEffect(() => {
        counter.current++;
        editA.current.focus();
    }, [b]);

    return (
        <div className='UseRef'>
            <PageTitle title='Hook UseRef' subtitle='Retorna um objeto mutável com a propriedade .current!'>
                <div className>
                    <span className='text'>Valor: </span>
                    <span className='text'>{merge(a, b)}</span>
                    <span className='text'>[</span>
                    <span className='text red'>{counter.current}</span>
                    <span className='text'>]</span>
                </div>

                <SectionTitle title='Exercício #01'>
                    <div className='center'>
                        <input type='text' className='input' ref={editA} value={a} onChange={e => setA(e.target.value)} />
                    </div>
                </SectionTitle>

                <SectionTitle title='Exercício #02'>
                    <div className='center'>
                        <input type='text' className='input' ref={editB} value={b} onChange={e => setB(e.target.value)} />
                    </div>
                </SectionTitle>
            </PageTitle>
        </div>
    );
};

export default UseRef;
