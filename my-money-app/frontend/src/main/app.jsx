import '../common/template/dependencies';

import React from 'react';

import Footer from '../common/template/footer';
import Header from '../common/template/header'
import Messages from '../common/messages/messages';
import SideBar from '../common/template/sideBar';

const App = ({ children }) => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {children}
        </div>
        <Footer />
        <Messages />
    </div>
);

export default App;
