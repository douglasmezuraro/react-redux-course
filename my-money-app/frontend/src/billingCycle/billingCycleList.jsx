import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

import { getMonthName } from '../common/utils/methods';

class BillingCycleList extends Component {
    componentDidMount() {
        this.props.getList();
    };

    renderRows() {
        const list = this.props.list || [];
        return list.sort((left, right) => left.year - right.year || left.month - right.month)
            .map(billingCycle => (
                <tr key={billingCycle._id}>
                    <td>{billingCycle.name}</td>
                    <td>{getMonthName(billingCycle.month)}</td>
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
                            <th className='table-actions'>Ações</th>
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
