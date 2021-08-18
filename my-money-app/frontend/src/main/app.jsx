import '../common/template/dependencies';

import React from 'react';

import Footer from '../common/template/footer';
import Header from '../common/template/header'
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
    </div>
);

export default App;
