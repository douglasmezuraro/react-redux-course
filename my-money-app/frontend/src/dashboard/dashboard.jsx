import React, { Component } from 'react';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='bg-green' icon='fa fa-bank' text='Total de Créditos' value='R$10,00' />
                        <ValueBox cols='12 4' color='bg-red' icon='fa fa-credit-card' text='Total de Débitos' value='R$10,00' />
                        <ValueBox cols='12 4' color='bg-blue' icon='fa fa-money' text='Valor Consolidado' value='R$0,00' />
                    </Row>
                </Content>
            </div>
        );
    };
};

export default Dashboard;
