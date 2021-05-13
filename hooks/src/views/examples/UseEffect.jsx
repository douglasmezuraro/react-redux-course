import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const calculateFactorial = (x) => {
    if (x < 0) {
        return -1;
    };

    if (x === 0) {
        return 1;
    };

    return calculateFactorial(x - 1) * x;
};

const UseEffect = () => {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);

    useEffect(() => setFactorial(calculateFactorial(number)), [number]);

    return (
        <div className='UseEffect'>
            <PageTitle
                title='Hook UseEffect'
                subtitle='Permite executar efeitos colaterais em componentes funcionais!'
            />

            <SectionTitle title='Exercício #01' />
            <div className='center'>
                <span className="text">Fatorial:</span>
                <span className="text red">{factorial === -1 ? 'Não existe' : factorial}</span>
            </div>
            <div className='center'>
                <input type='number' className='text' value={number} onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    );
};

export default UseEffect;
