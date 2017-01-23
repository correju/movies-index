import { api_key } from '../../settings/'

const HTTP = new WeakMap();
export default class SearchService {
    constructor ($http) {
        HTTP.set(this, $http);
    }
    search (query) {
        return HTTP.get(this).get(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}`)
    }
}

SearchService.$inject = ['$http']