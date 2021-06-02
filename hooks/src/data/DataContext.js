import React from 'react';

export const data = {
    number: 0,
    text: 'Data Context',
}

const DataContext = React.createContext(data);

export default DataContext;
