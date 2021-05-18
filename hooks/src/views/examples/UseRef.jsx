import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = () => {
    const [value, setValue] = useState('');
    const counter = useRef(0);

    useEffect(() => {
        counter.current = counter.current + 1;
    }, [value]);

    return (
        <div className='UseRef'>
            <PageTitle
                title='Hook UseRef'
                subtitle='Retorna um objeto mutável com a propriedade .current!'
            />

            <SectionTitle title='Exercício #01' />
            <div className='center'>
                <div className>
                    <span className='text'>Valor: </span>
                    <span className='text'>{value}</span>
                    <span className='text'>[</span>
                    <span className='text red'>{counter.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </div>
    );
};

export default UseRef;
