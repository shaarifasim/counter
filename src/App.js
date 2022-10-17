import logo from './logo.svg';
import {useState} from "react";

import './App.css';

function App() {
  return (
    <div className="App">
      <button  className="Add" onClick="Add">Add</button>
      <div className="screen"> 
      <h2>"Counter"</h2>
      </div>
      <button  className="Add" onClick="Subtract">Subtract</button>
    </div>
  );
}

export default App;
