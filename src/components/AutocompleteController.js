import {useState} from 'react';

class AutocompleteController {
    constructor() {
        [this._input, this._setInput] = useState("");
        [this._values, this._setValues] = useState([]);
        [this._select, this._setSelect] = useState(undefined);
        
        this._handler = undefined;
    }

    get input() {
        return this._input;
    }

    set input(newValue) {
        this._setSelect(undefined);
        this._setInput(newValue);
        this._updateAutocomplete(newValue);
    }

    get select() {
        return this._select;
    }

    set select(value) {
        this._setInput(value.login);
        this._setSelect(value);
        this._setValues([]);
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

    async forceUpdateAutocomplete() {
        return this._updateAutocomplete(this.input);
    }

    async _updateAutocomplete(value) {
        if (!this._handler) {return};

        try {
            const values = await this._handler(value);
            this._setValues(values);
        } catch (error) {
            // Need to decide what to do if handler fails

        }
    }
}

export default AutocompleteController;