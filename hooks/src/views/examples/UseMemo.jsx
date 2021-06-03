import React, { useMemo, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const sum = (a, b) => {
    const future = Date.now() + 2000;
    while (Date.now() < future) {
        // simula um processamento pesado
    };
    return a + b;
};

const UseMemo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const result = useMemo(() => sum(a, b), [a, b]);

    return (
        <div className='UseMemo'>
            <PageTitle title='Hook UseMemo' subtitle='Retorna um valor memoizado!' >
                <div className='center'>
                    <input type='number' className='input' value={a} onChange={e => setA(parseInt(e.target.value))} />
                    <input type='number' className='input' value={b} onChange={e => setB(parseInt(e.target.value))} />
                    <input type='number' className='input' value={c} onChange={e => setC(parseInt(e.target.value))} />

                    <span className='text'>{result}</span>
                </div>
            </PageTitle>
        </div>
    );
};

export default UseMemo;
