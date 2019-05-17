import React from 'react';
import Autocomplete from './components/Autocomplete';
import AutocompleteController from './components/AutocompleteController';
import './App.css';
import GitAutocompleteHandler from './components/GitAutocompleteHandler';

function App() {
  const controller = new AutocompleteController();
  const handler = new GitAutocompleteHandler(controller);
  const {select} = controller;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Git UserBook</h1>
      </header>
      <div className="main-content">
        <Autocomplete placeholder="Search User" disabled={handler.disabled} controller={controller} />
        {controller.select &&
          <div className="h-card">
            <div className="avatar">
              <img src={select.avatar_url} alt={select.login} />
            </div>
            {select.login}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
