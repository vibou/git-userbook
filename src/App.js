import React from 'react';
import Autocomplete from './Autocomplete';
import AutocompleteController from './AutocompleteController';
import GitRequest from './GitRequest';


import './App.css';

function App() {

  const controller = new AutocompleteController();
  controller.handler = async (v) => {
    return await GitRequest.searchUsers(v);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Git UserBook</h1>
      </header>
      <div className="main-content">
        <Autocomplete controller={controller} />
      </div>
    </div>
  );
}

export default App;
