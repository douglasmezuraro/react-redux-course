import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

const TabHeader = ({ icon, label, selectTab, tab, target }) => (
    <li className={tab.selected === target ? 'active' : ''}>
        <a href='javascript:;' data-toggle='tab' data-target={target} onClick={() => selectTab(target)} >
            <i className={icon} /> {label}
        </a>
    </li>
);

const mapStateToProps = state => (
    {
        tab: state.tab,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
