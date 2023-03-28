import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <AppRouter/>
    </div>
  );
}

export default App;