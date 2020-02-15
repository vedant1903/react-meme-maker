import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './Components/Header'
import Header from './Components/Header';
import MemeGenerator from './Components/MemeGenerator';

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>    
  );
}

export default App;
