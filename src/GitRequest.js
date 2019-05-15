export default {
    async searchUsers(filter) {
        if (filter.length === 0) { return [] }
        const response = await fetch(`https://api.github.com/search/users?q=${filter}`);
        if (response.status !== 200) {
            throw new Error(`Status Error ${response.status}`);
        }

        const {items} = await response.json();
        return items.map(i => i.login);
    } 
};