import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='Main-container'>
        <Main />
      </main>
    </div>
  );
}

export default App;
