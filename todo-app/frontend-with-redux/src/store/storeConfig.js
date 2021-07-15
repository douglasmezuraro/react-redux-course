import { combineReducers } from 'redux';
import todoReducer from './reducers/todo';

const reducers = combineReducers(
    {
        todo: todoReducer
    }
);

export default reducers;
