import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';

import Form from './bilingCycleForm';
import List from './billingCycleList';

import * as Actions from './actions';

class BillingCycle extends Component {
    componentDidMount() {
        this.props.init();
    };

    render() {
        const { create, update, remove } = this.props;
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='fa fa-bars' target='tabList' />
                            <TabHeader label='Incluir' icon='fa fa-plus' target='tabCreate' />
                            <TabHeader label='Editar' icon='fa fa-pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='fa fa-trash-o' target='tabDelete' />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>

                            <TabContent id='tabCreate'>
                                <Form onSubmit={create} submitClass='btn btn-primary' submitLabel='Incluir' />
                            </TabContent>

                            <TabContent id='tabUpdate'>
                                <Form onSubmit={update} submitClass='btn btn-warning' submitLabel='Alterar' />
                            </TabContent>

                            <TabContent id='tabDelete'>
                                <Form onSubmit={remove} submitClass='btn btn-danger' submitLabel='Remover' readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
