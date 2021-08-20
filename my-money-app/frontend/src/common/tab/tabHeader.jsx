import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import If from '../operator/if';

import * as Actions from './actions';

const TabHeader = ({ icon, label, selectTab, tab, target }) => {
    const selected = tab.selected === target;
    const visible = tab.visible[target];

    return (
        <If condition={visible}>
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;' data-toggle='tab' data-target={target} onClick={() => selectTab(target)} >
                    <i className={icon} /> {label}
                </a>
            </li>
        </If>
    );
};

const mapStateToProps = state => (
    {
        tab: state.tab,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
