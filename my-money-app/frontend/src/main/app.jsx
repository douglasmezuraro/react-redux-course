import '../common/template/dependencies';

import React from 'react';

import Footer from '../common/template/footer';
import Header from '../common/template/header'
import Messages from '../common/messages/messages';
import Routes from './routes';
import SideBar from '../common/template/sideBar';

const App = () => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
);

export default App;
