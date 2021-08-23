import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

const MONTHS = Object.freeze({
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
});

class BillingCycleList extends Component {
    componentDidMount() {
        this.props.getList();
    };

    renderRows() {
        const list = this.props.list || [];
        return list.sort((a, b) => a.month - b.month)
            .map(billingCycle => (
                <tr key={billingCycle._id}>
                    <td>{billingCycle.name}</td>
                    <td>{MONTHS[billingCycle.month]}</td>
                    <td>{billingCycle.year}</td>
                    <td>
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(billingCycle)}>
                            <i className='fa fa-pencil' />
                        </button>

                        <button className='btn btn-danger' onClick={() => this.props.showRemove(billingCycle)}>
                            <i className='fa fa-trash-o' />
                        </button>
                    </td>
                </tr>
            ));
    };

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    };
};

const mapStateToProps = state => (
    {
        list: state.billingCycle.list,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
