import { combineReducers, createStore } from 'redux';

import { UPDATE_MIN, UPDATE_MAX } from './actions/constants';

const reducers = combineReducers(
    {
        numbers: function (state, action) {
            console.log(state)
            switch (action.type) {
                case UPDATE_MIN: return { ...state, min: action.payload }
                case UPDATE_MAX: return { ...state, max: action.payload }
                default: return { min: 0, max: 100 }
            };
        },
    },
);

const storeConfig = () => createStore(reducers);

export default storeConfig;
