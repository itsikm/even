/**
 * GitHub Api Class
 */
export default class GitHubApi {
    /**
     * Constructor
     * @param {Object} api - list or api urls
     */
    constructor(api) {
        this.api = api;
    }

    /**
     * Execute Api Fetch
     * @param {string} section - api root
     * @param {string} query - github search query
     * @returns {Promise<any | never>}
     * @private
     */
    _execute(section, query = '') {
        return fetch(`${this.api[section]}?${query}`)
            .then(response => response.json());
    }

    /**
     * Parse Query
     * @desc convert from data object to github search query
     * @param {Object} query
     * @returns {string}
     * @private
     */
    _parseQuery(query) {
        let q = [];
        for (let i in query) {
            if (query[i]) {
                q.push(
                    i === 'text' ? `${query[i]}` : `${i}:${query[i]}`
                );
            }
        }
        return 'q=' + q.join('+');
    }

    /**
     * GitHub Licenses list
     * @returns {Promise<any | never>}
     */
    licenses() {
        return this._execute('license');
    }

    /**
     * GitHub Search
     * @param {Object} query
     * @returns {Promise<any|never>}
     */
    search(query) {
        return this._execute('search', this._parseQuery(query));
    }
}
