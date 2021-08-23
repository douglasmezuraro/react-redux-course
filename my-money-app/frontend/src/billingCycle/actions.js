import Axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize, reset as resetForm } from 'redux-form';

import { selectTab, showTabs } from '../common/tab/actions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};


export const getList = () => (
    {
        type: 'BILLING_CYCLES_FETCHED',
        payload: Axios.get(`${BASE_URL}/billingCycles/`),
    }
);

export const create = (values) =>
    dispatch => Axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(() => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.');
            dispatch(init());
        })
        .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)));

export const showUpdate = (billingCycle) =>
    [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle),
    ];

export const init = () =>
    [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ];
