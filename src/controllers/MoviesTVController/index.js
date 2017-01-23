export default class MoviesTVController {
    constructor ($scope, configurationService, $stateParams, movieTVService, $q) {
        this.id = $stateParams.id
        this.type = $stateParams.type
        this.url = ''
        this.name = ''
        configurationService.getConfPromise().then(
            response => {
                let data = configurationService.getConf()
                let folder = data.images.big
                let service
                this.url = data.images.base_url + folder + "/"
                if (this.type==='movie'){
                    service = movieTVService.getMovie
                } else {
                    service = movieTVService.getTv
                }
                $q.all([
                    service(this.id),
                ]).then( values => {
                    console.log(values[0].data)

                    this.poster_path = values[0].data.poster_path
                    this.title = values[0].data.title || values[0].data.name
                    this.release_date = values[0].data.release_date || values[0].data.first_air_date
                    this.overview = values[0].data.overview


                    },
                    err => {
                        console.log(err.message)
                    }
                )
            },
            err => {
                console.log(err.message)
            }
        )
    }
}

MoviesTVController.$inject = ['$scope', 'configurationService','$stateParams', 'movieTVService', '$q']
