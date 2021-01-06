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
  );
}

export default App;
