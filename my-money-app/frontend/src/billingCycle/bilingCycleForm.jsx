import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import LabeledInput from '../common/form/labeledInput';
import LabeledSelect from '../common/form/labeledSelect';
import ItemList from './itemList';
import Summary from './summary';
import { MonthEnum } from './enums';
import { sum } from '../common/utils/methods';

import * as Actions from './actions';

class BillingCycleForm extends Component {
    calculateSummary() {
        return {
            sumOfCredits: this.props.credits.map(credit => parseFloat(credit.value) || 0.00).reduce(sum),
            sumOfDebts: this.props.debts.map(debt => parseFloat(debt.value) || 0.00).reduce(sum),
        };
    };

    render() {
        const { credits, debts, handleSubmit, init, readOnly, submitClass, submitLabel } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabeledInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly} />
                    <Field name='month' component={LabeledSelect} label='Mês' cols='12 4' placeholder='Infome o mês' options={MonthEnum} readOnly={readOnly} />
                    <Field name='year' component={LabeledInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' step={0.01} readOnly={readOnly} />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} />

                    <ItemList title='Créditos' field='credits' cols='12 6' readOnly={readOnly} showStatus={false} values={credits} />
                    <ItemList title='Débitos' field='debts' cols='12 6' readOnly={readOnly} showStatus={true} values={debts} />
                </div>

                <div className='box-footer'>
                    <button type='submit' className={submitClass}>{submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={init}>Cancelar</button>
                </div>
            </form>
        );
    };
};

const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => (
    {
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts'),
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
