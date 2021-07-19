const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('get', (request, response, next) => {
    BillingCycle.find({}, (error, docs) => {
        if (!error) {
            response.json(docs);
        } else {
            response.status(500).json({ errors: [error] });
        };
    })
});

BillingCycle.route('count', (request, response, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            response.status(500).json({ errors: [error] });
        } else {
            response.json({ value });
        };
    })
});

module.exports = BillingCycle;
