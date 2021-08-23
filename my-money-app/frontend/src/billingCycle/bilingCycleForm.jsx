import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import LabeledInput from '../common/form/labeledInput';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabeledInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabeledInput} label='Mês' cols='12 4' placeholder='Infome o mês' type='number' />
                    <Field name='year' component={LabeledInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />
                </div>

                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    };
};

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
