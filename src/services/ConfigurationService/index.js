export default class Configuration {
    constructor ($http) {
        let urlArray = window.location.href.split('/')
        let url = `${urlArray[0]}//${urlArray[2]}`
        this.promise = $http.get(`${url}/json/conf`).then(
            response => {
                this.config = response.data
                console.log(this.config)
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
        return this.config
    }
    getKey(){
        return this.config.api_key
    }
}

Configuration.$inject = ['$http']