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
        return (
            values.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Field name={`[${this.props.field}][${index}].name`} component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly} />
                    </td>

                    <td>
                        <Field name={`[${this.props.field}][${index}].value`} component={Input} placeholder='Informe o valor' readOnly={this.props.readOnly} type='number' step={0.01} />
                    </td>

                    <If condition={this.props.showStatus}>
                        <td>
                            <Field name={`[${this.props.field}][${index}].status`} component={Select} placeholder='Informe o status' readOnly={this.props.readOnly} options={StatusEnum} />
                        </td>
                    </If>

                    <td>
                        <button type='button' className='btn btn-success' disabled={this.props.readOnly} onClick={() => this.add(index + 1)} >
                            <i className='fa fa-plus' />
                        </button>

                        <button type='button' className='btn btn-warning' disabled={this.props.readOnly} onClick={() => this.add(index + 1, item)} >
                            <i className='fa fa-clone' />
                        </button>

                        <button type='button' className='btn btn-danger' disabled={this.props.readOnly} onClick={() => this.remove(index)} >
                            <i className='fa fa-trash-o' />
                        </button>
                    </td>
                </tr>
            ))
        );
    };

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>
                        {this.props.title}
                    </legend>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If condition={this.props.showStatus}>
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
