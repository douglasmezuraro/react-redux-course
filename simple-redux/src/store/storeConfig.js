import { combineReducers, createStore } from 'redux';

const reducers = combineReducers(
    {
        numbers: function (state, action) {
            console.log(state, ' ', action);
            return { min: 7, max: 31 };
        },
        names: function (state, action) {
            console.log(state, ' ', action);
            return [
                'Ana',
                'Bia',
                'Douglas',
            ];
        },
    },
);

const storeConfig = () => createStore(reducers);

export default storeConfig;
