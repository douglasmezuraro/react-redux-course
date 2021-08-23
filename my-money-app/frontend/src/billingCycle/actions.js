import Axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => (
    {
        type: 'BILLING_CYCLES_FETCHED',
        payload: Axios.get(`${BASE_URL}/billingCycles/`),
    }
);