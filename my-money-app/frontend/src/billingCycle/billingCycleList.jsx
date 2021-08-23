import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

const BillingCycleList = ({ list }) => (
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

            </tbody>
        </table>
    </div>
);

const mapStateToProps = state => (
    {

    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
