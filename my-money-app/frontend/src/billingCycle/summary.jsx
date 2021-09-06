import React from 'react';

import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

import { CURRENCY_FORMATTER } from '../common/utils/methods';

const Summary = ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>
                Resumo
            </legend>

            <Row>
                <ValueBox cols='12 4' color='bg-green' icon='fa fa-bank' text='Total de Créditos' value={CURRENCY_FORMATTER.format(credit)} />
                <ValueBox cols='12 4' color='bg-red' icon='fa fa-credit-card' text='Total de Débitos' value={CURRENCY_FORMATTER.format(debt)} />
                <ValueBox cols='12 4' color='bg-blue' icon='fa fa-money' text='Valor Consolidado' value={CURRENCY_FORMATTER.format(credit - debt)} />
            </Row>
        </fieldset>
    </Grid>
);

export default Summary;
