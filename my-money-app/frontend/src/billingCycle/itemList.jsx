import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Input from '../common/form/input';
import Select from '../common/form/select';
import Grid from '../common/layout/grid';
import If from '../common/operator/if';
import { StatusEnum } from './enums';

class ItemList extends Component {
    add(index, item = {}) {
        this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
    };

    remove(index) {
        this.props.arrayRemove('billingCycleForm', this.props.field, index);
    };

    renderRows() {
        const values = this.props.values || [];
        const { disabled, field, showStatus } = this.props;

        return (
            values.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Field component={Input} disabled={disabled} name={`[${field}][${index}].name`} placeholder='Informe o nome' />
                    </td>

                    <td>
                        <Field component={Input} disabled={disabled} name={`[${field}][${index}].value`} placeholder='Informe o valor' type='number' step={0.01} />
                    </td>

                    <If condition={showStatus}>
                        <td>
                            <Field component={Select} disabled={disabled} name={`[${field}][${index}].status`} placeholder='Informe o status' options={StatusEnum} />
                        </td>
                    </If>

                    <td>
                        <button className='btn btn-success' disabled={disabled} onClick={() => this.add(index + 1)} type='button'>
                            <i className='fa fa-plus' />
                        </button>

                        <button className='btn btn-warning' disabled={disabled} onClick={() => this.add(index + 1, item)} type='button'>
                            <i className='fa fa-clone' />
                        </button>

                        <button className='btn btn-danger' disabled={disabled} onClick={() => this.remove(index)} type='button'>
                            <i className='fa fa-trash-o' />
                        </button>
                    </td>
                </tr>
            ))
        );
    };

    render() {
        const { cols, showStatus, title } = this.props;

        return (
            <Grid cols={cols}>
                <fieldset>
                    <legend>
                        {title}
                    </legend>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If condition={showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);
