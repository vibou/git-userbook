import {useState} from 'react';

class AutocompleteController {
    constructor() {
        [this._input, this._setInput] = useState("");
        [this._values, this._setValues] = useState([]);
        
        this._handler = undefined;
    }

    get input() {
        return this._input;
    }

    set input(newValue) {
        this._setInput(newValue);
        this._updateAutocomplete(newValue);
    }

    get values() {
        return this._values;
    }

    set handler(handler) {
        this._handler = handler;
    }

    get handler() {
        return this._handler;
    }

    async _updateAutocomplete(value) {
        if (!this._handler) {return};

        const values = await this._handler(value);
        this._setValues(values);
    }
}

export default AutocompleteController;