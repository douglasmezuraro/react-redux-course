const restful = require('node-restful');
const mongoose = restful.mongoose;

const statusEnum = Object.freeze({
    0: 'Pago',
    1: 'Pendente',
    2: 'Agendado',
});

const creditSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Informe o nome do crédito.'] },
        value: { type: Number, min: 0, required: [true, 'Informe o valor do crédito.'] },
    }
);

const debtSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Informe o nome do débito.'] },
        value: { type: Number, min: 0, required: [true, 'Informe o valor do débito.'] },
        status: { type: Number, required: [true, 'Informe o status do débito'], enum: Object.keys(statusEnum).map(x => parseInt(x)) },
    }
);

const billingCycleSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Informe o nome do ciclo de pagamento.'] },
        month: { type: Number, min: 1, max: 12, required: [true, 'Informe o mês do ciclo de pagamento.'] },
        year: { type: Number, min: 1900, max: 2100, required: [true, 'Informe o ano do ciclo de pagamento.'] },
        credits: [creditSchema],
        debts: [debtSchema],
    }
);

module.exports = restful.model('BillingCycle', billingCycleSchema);
