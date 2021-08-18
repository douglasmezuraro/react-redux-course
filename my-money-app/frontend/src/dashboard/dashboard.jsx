import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

class Dashboard extends Component {
    render() {
        const { credit, debt } = this.props.summary;

        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='bg-green' icon='fa fa-bank' text='Total de Créditos' value={`R$${credit.toFixed(2)}`} />
                        <ValueBox cols='12 4' color='bg-red' icon='fa fa-credit-card' text='Total de Débitos' value={`R$${debt.toFixed(2)}`} />
                        <ValueBox cols='12 4' color='bg-blue' icon='fa fa-money' text='Valor Consolidado' value={`R$${(credit - debt).toFixed(2)}`} />
                    </Row>
                </Content>
            </div>
        );
    };
};

const mapStateToProps = state => (
    {
        summary: state.dashboard.summary,
    }
);

export default connect(mapStateToProps)(Dashboard);
