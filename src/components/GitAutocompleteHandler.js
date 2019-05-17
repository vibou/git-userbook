import {useState} from 'react';
import GitRequest from '../GitRequest';

class GitAutocompleteHandler {

  constructor(controller) {
    [this._disableAutocomplete, this._setDisableAutocomplete] = useState(0);
    this._controller = controller;
    controller.handler = this.handler;
  }

  get disabled() {
    return this._disableAutocomplete;
  }

  get controller () {
    return this._controller;
  }

  async handler(v) {
    try {
      return await GitRequest.searchUsers(v, 500);
    } catch (error) {
      this._setDisableAutocomplete(true);
      
      //Use anonymous function to not block the throw error
      (async () => {
        const resetTime = await GitRequest.timeBeforeResetInMS();
        const now = new Date().getTime();

        var remainingTime = resetTime - now;
        
        this._setDisableAutocomplete(remainingTime);

        if (resetTime - now > 0) {
          // Update timeout 
          const interval = setInterval(() => {
            const now = new Date().getTime();
            var remainingTime = resetTime - now;
            this._setDisableAutocomplete(remainingTime);
          }, 1000);
          setTimeout(() => {
            clearInterval(interval);
            this._setDisableAutocomplete(0);
            this.controller.forceUpdateAutocomplete();
          }, remainingTime);
        } else {
          this._setDisableAutocomplete(0);
          this.controller.forceUpdateAutocomplete()
        }

      })();

      throw error;
    }
  }
}


export default GitAutocompleteHandler;