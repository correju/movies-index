let configurationService;
const HTTP = new WeakMap();
export default class SearchService {
    constructor ($http,$configurationService) {
        configurationService = $configurationService;
        HTTP.set(this, $http);
    }
    search (query) {
        let key = configurationService.getKey()
        return HTTP.get(this).get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}`)
    }
}

SearchService.$inject = ['$http', 'configurationService']