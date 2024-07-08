import React from 'react';
import './App.css';
import Portfolio from './components/PortfolioFilters/Portfolio';
import Store from './components/StoreLayout/Store';
import Dropdown from './components/DropdownList/Dropdown';

function App() {
  return (
    <div className="App">
      <h1>My React Projects</h1>
      <Portfolio />
      <Store />
      <Dropdown />
    </div>
  );
}

export default App;
