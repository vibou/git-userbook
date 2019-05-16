class GitRequest {
    constructor() {
        this._timeoutHandle = undefined;
    }


    async searchUsers(filter, delay=400) {
        if (this._timeoutHandle) {
            clearTimeout(this._timeoutHandle);
            this._timeoutHandle = undefined;
        }

        return new Promise((resolve, fail) => {
            this._timeoutHandle = setTimeout(async () => {
                if (filter.length === 0) { 
                    resolve([]); 
                    return 
                }
                const response = await fetch(`https://api.github.com/search/users?q=${filter}`);
                if (response.status !== 200) {
                    fail(new Error(`Status Error ${response.status}`));
                    return;
                }
    
                const {items} = await response.json();
                resolve(items.map(i => i.login));
            }, delay);  
        });
    }

    async timeBeforeResetInMS() {
        const response = await fetch("https://api.github.com/rate_limit");
        const {resources} = await response.json();
        const {search} = resources;

        return search.reset * 1000;
    }   
}

const singleton = new GitRequest();

export default singleton;