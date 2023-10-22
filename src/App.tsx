import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InputTask} from "./components/InputTask";
import {AddTask} from "./components/AddTask";

function App() {
  return (
    <div className="App">
        <InputTask />
        <AddTask />
    </div>
  );
}

export default App;
