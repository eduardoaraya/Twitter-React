import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Home from '../pages/home';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
