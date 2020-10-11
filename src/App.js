import React from 'react';
import MyFunction from './Testing.js';
import './App.css';

function App() {
  return (
      <div className="App">
          <MyFunction LineOne="one" LineTwo="Two" />
          <MyFunction LineOne="Halwa" LineTwo="Four" />
          <MyFunction LineOne="Seven" LineTwo="Six" />
          </div>
  );
}

export default App;
