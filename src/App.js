import React, {useState} from 'react';
import Autocomplete from './Autocomplete';
import AutocompleteController from './AutocompleteController';
import GitRequest from './GitRequest';


import './App.css';

function App() {
  const [disableAutocomplete, setDisableAutocomplete] = useState(0);
  const controller = new AutocompleteController();
  controller.handler = async (v) => {
    try {
      return await GitRequest.searchUsers(v);
    } catch (error) {
      setDisableAutocomplete(true);
      
      //Use anonymous function to not block the throw error
      (async () => {
        const resetTime = await GitRequest.timeBeforeResetInMS();
        const now = new Date().getTime();

        var remainingTime = resetTime - now;
        
        setDisableAutocomplete(remainingTime);

        if (resetTime - now > 0) {
          // Update timeout 
          const interval = setInterval(() => {
            const now = new Date().getTime();
            var remainingTime = resetTime - now;
            setDisableAutocomplete(remainingTime);
          }, 1000);
          setTimeout(() => {
            clearInterval(interval);
            setDisableAutocomplete(0);
            controller.forceUpdateAutocomplete();
          }, remainingTime);
        } else {
          setDisableAutocomplete(0);
          controller.forceUpdateAutocomplete()
        }

      })();


      throw error;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Git UserBook</h1>
      </header>
      <div className="main-content">
        <Autocomplete placeholder="Search User" disabled={disableAutocomplete} controller={controller} />
        {controller.select &&
          <div>You have selected: {controller.select}</div>
        }
      </div>
    </div>
  );
}

export default App;
