export default class PeopleController {
    constructor ($scope, configurationService, $stateParams, peopleService, $q) {
        this.id = $stateParams.id
        this.url = ''
        this.name = ''
        configurationService.getConfPromise().then(
            response => {
                let data = configurationService.getConf()

                this.url = data.images.base_url + 'w300' + "/"

                $q.all([
                    peopleService.getPerson(this.id),
                    peopleService.getMovieCredits(this.id),
                    peopleService.getTvCredits(this.id)
                ]).then( values => {

                        this.name = values[0].data.name
                        this.biography = values[0].data.biography
                        this.birthday = values[0].data.birthday
                        this.profile_path = values[0].data.profile_path
                        this.castMovies = values[1].data.cast.map( e => {
                            e.timestamp = new Date(e.release_date).getTime()
                            return e
                        })
                        this.castMovies = this.castMovies.sort((a, b) => {
                            return a.timestamp - b.timestamp
                        })

                        this.castTv = values[2].data.cast.map( e => {
                            e.timestamp = new Date(e.first_air_date).getTime()
                            return e
                        })

                        this.castTv = this.castMovies.sort((a, b) => {
                            return a.timestamp - b.timestamp
                        })

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

PeopleController.$inject = ['$scope', 'configurationService','$stateParams', 'peopleService', '$q']
