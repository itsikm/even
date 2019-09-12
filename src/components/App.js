import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchPage from '../pages/SearchPage';
import './App.scss';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="main">
            <SearchPage />
        </div>
        <Footer />
    </div>
  );
}

export default App;
