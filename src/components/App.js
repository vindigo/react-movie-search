import React from 'react';
import './style.css';
import Searchbar from './Searchbar.js';

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <Searchbar />
    </div>
  )
}

export default App;