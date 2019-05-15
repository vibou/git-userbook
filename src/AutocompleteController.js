import {useState} from 'react';

class AutocompleteController {
    constructor() {
        [this._input, this._inputSetter] = useState("");
        [this._values, this._valuesSetter] = useState([]);
    }

    get input() {
        return this._input;
    }

    set input(newValue) {
        this._inputSetter(newValue);
        this._updateAutocomplete(newValue);
    }

    get values() {
        return this._values;
    }

    async _updateAutocomplete(value) {

    }
}

export default AutocompleteController;