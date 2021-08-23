import Axios from 'axios';
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => (
    {
        type: 'BILLING_CYCLES_FETCHED',
        payload: Axios.get(`${BASE_URL}/billingCycles/`),
    }
);

export const create = values => {
    Axios.post(`${BASE_URL}/billingCycles/`, values)
        .then(() => toastr.success('Sucesso', 'Operação realizada com sucesso.'))
        .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)));

    return {
        type: 'BILLING_CYCLE_CREATED',
        payload: null,
    };
};