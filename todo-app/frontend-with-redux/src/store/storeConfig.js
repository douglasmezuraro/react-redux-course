import { combineReducers, createStore } from 'redux';

import todoReducer from './reducers/todo';

const reducers = combineReducers(
    {
        todo: todoReducer
    }
);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

export default createStore(reducers, devTools);
