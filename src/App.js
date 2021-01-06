// import logo from './logo.svg';
import React from 'react';
import { Provider } from 'Provider';
import Index from './components/index';
// import 'reset-css'
import './App.css';

function App() {
  return (
      <Provider>
        <Index />
      </Provider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save TERTY reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
