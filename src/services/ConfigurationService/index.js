import { api_key } from '../../settings/'
let config = [];

export default class Configuration {
    constructor ($http) {
        let urlArray = window.location.href.split('/')
        let url = `${urlArray[0]}//${urlArray[2]}`
        this.promise = $http.get(`${url}/json/conf`).then(
            response => {
                config = response.data
            },
            err =>{
            console.log(err.message)
            }
        )
        $http.get(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`).then(
        response => {
          config = response.data
        },
        err =>{
          console.log(err.message)
        }
      )
    }
    getConfPromise (query) {
        return this.promise
    }
    getConf(){
        return config
    }
    getKey(){
        return config.api_key
    }
}

Configuration.$inject = ['$http']