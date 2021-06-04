import { useState } from 'react';

const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const inc = () => setCounter(counter + 1);
    const dec = () => setCounter(counter - 1);

    return [counter, inc, dec];
};

export default useCounter;
