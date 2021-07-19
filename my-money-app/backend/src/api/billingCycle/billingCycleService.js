const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('get', (request, response, next) => {
    BillingCycle.find({}, (error, docs) => {
        if (error) {
            response.status(500).json({ errors: [error] });
        } else {
            response.json(docs);
        };
    });
});

BillingCycle.route('count', (request, response, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            response.status(500).json({ errors: [error] });
        } else {
            response.json({ value });
        };
    });
});

BillingCycle.route('summary', (request, response, next) => {
    const pipeline = [
        {
            $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } },
        },
        {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } },
        },
        {
            $project: { _id: 0, credit: 1, debt: 1 },
        },
    ];

    BillingCycle.aggregate(pipeline, (error, result) => {
        if (error) {
            response.status(500).json({ errors: [error] });
        } else {
            response.json(result[0] || { credit: 0, debt: 0 });
        };
    });
});

module.exports = BillingCycle;
