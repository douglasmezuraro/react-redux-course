import Axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export const getSummary = () => (
    {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: Axios.get(`${BASE_URL}/billingCycles/summary`),
    }
);
