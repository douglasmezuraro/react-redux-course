import Axios from 'axios';
import { initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { selectTab, showTabs } from '../common/tab/actions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};

//TODO: Criar um método chamado "showTab" para ser genérico e remover os métodos "showUpdate" e "showRemove"
//TODO: Criar um método chamado "submit" para ser genérioc e remover os métodos "create", "update" e "remove"

export const getList = () => (
    {
        type: 'BILLING_CYCLES_FETCHED',
        payload: Axios.get(`${BASE_URL}/billingCycles/`),
    }
);

export const create = (values) =>
    dispatch => Axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(() => {
            toastr.success('Sucesso', 'Registro inserido com sucesso.');
            dispatch(init());
        })
        .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)));

export const update = (values) =>
    dispatch => Axios.put(`${BASE_URL}/billingCycles/${values._id}`, values)
        .then(() => {
            toastr.success('Sucesso', 'Registro atualizado com sucesso.');
            dispatch(init());
        })
        .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)));

export const remove = (values) =>
    dispatch => Axios.delete(`${BASE_URL}/billingCycles/${values._id}`, values)
        .then(() => {
            toastr.success('Sucesso', 'Registro removido com sucesso.');
            dispatch(init());
        })
        .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)));

export const showUpdate = (billingCycle) =>
    [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle),
    ];

export const showRemove = (billingCycle) =>
    [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle),
    ];

export const init = () =>
    [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ];
