import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {
        todo: () => (
            {
                description: 'ler livro',
                data: [
                    {
                        _id: 1,
                        description: 'pagar fatura do cartão',
                        done: true,
                    },
                    {
                        _id: 2,
                        description: 'reunião com a equipe às 10:00',
                        done: false,
                    },
                    {
                        _id: 3,
                        description: 'consulta médica terça depois do almoço',
                        done: false,
                    },
                ],
            }
        )
    }
);

export default rootReducer;
