// App.js
import React, { useState } from 'react';
import Calculator from './components/Calculator.jsx';
import ListaTareas from './components/ListaTareas.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Calculator />
      <ListaTareas />
  
    </div>
  );
}

export default App;