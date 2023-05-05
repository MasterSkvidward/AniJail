import React, { useEffect, useLayoutEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './styles/App.scss';

function App() {

    return (
        <div className="App">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;