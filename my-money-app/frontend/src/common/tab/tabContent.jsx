import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import If from '../operator/if';

import * as Actions from './actions';

const TabContent = ({ children, id, tab }) => {
    const selected = id === tab.selected;
    const visible = tab.visible[id];

    return (
        <If condition={visible}>
            <div id={id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {children}
            </div>
        </If>
    );
};

const mapStateToProps = state => (
    {
        tab: state.tab,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
