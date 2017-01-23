import { api_key } from '../../settings/'
let configurationService
let http;
export default class PeopleService {
    constructor ($http,$configurationService) {
        http = $http;
        configurationService = $configurationService
    }
    getPerson (id) {
        let key = configurationService.getKey()
        return http.get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
    }
    getMovieCredits (id) {
        let key = configurationService.getKey()
        return http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
    }
    getTvCredits (id) {
        let key = configurationService.getKey()
        return http.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${key}&language=en-US`)
    }
}

PeopleService.$inject = ['$http','configurationService']