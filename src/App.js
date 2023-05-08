import './App.css';
import './scss/app.scss';

import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      {/* <Home /> */}
      <NotFound />
    </div>
  );
}

export default App;
