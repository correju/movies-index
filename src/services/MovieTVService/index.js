import { api_key } from '../../settings/'

let http;
let configurationService;
export default class MovieTVService {
    constructor ($http,$configurationService) {
        http = $http
        configurationService = $configurationService
    }
    getMovie (id) {
        let key = configurationService.getKey() || api_key
        return http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        //return http.get(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}&language=en-US`)

    }
    getTv (id) {
        let key = configurationService.getKey()
        return http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
    }
}

MovieTVService.$inject = ['$http','configurationService']