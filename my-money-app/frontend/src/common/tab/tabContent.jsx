import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as Actions from './actions';

const TabContent = ({ children, id, tab }) => (
    <div id={id} className={`tab-pane ${id === tab.selected ? 'active' : ''}`}>
        {children}
    </div>
);

const mapStateToProps = state => (
    {
        tab: state.tab,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
