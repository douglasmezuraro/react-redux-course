import { combineReducers, createStore } from 'redux';

import numbers from './reducers/numbers';

const reducers = combineReducers(
    {
        numbers: numbers,
    },
);

const storeConfig = () => createStore(reducers);

export default storeConfig;
