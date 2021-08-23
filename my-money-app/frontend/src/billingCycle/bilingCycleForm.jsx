import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import LabeledInput from '../common/form/labeledInput';

import * as Actions from './actions';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props;

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabeledInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly} />
                    <Field name='month' component={LabeledInput} label='Mês' cols='12 4' placeholder='Infome o mês' type='number' readOnly={readOnly} />
                    <Field name='year' component={LabeledInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' readOnly={readOnly} />
                </div>

                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

export default connect(null, mapDispatchToProps)(BillingCycleForm);

