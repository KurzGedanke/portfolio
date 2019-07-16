import React from 'react';
import Header from './components/Header.js';
import Professions from './components/Professions.js';
import './components/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Professions />
    </div>
  );
}

export default App;
