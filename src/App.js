import React from 'react';
import './App.css';
import ExodusGenelogies from './components/ExodusGenelogies';
import GenesisGenelogies from './components/GenesisGenelogies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A Cronologia Bíblica</h1>
        <h2>A DATA DO DILÚVIO NA HISTÓRIA BÍBLICA</h2>
      </header>
      <ExodusGenelogies/>
      <GenesisGenelogies/>
    </div>
  );
}

export default App;
