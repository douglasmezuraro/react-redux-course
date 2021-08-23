import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

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
                    <td>{billingCycle.month}</td>
                    <td>{billingCycle.year}</td>
                </tr>
            ));
    }   ;

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
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
