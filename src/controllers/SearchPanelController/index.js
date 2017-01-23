let state;
let scope;
export default class SearchPanelController {
    constructor ($scope,configurationService,$state) {
        this.url = ""
        state = $state;
        scope = $scope
        configurationService.getConfPromise().then(
            response => {
                let data = configurationService.getConf()
                this.url = data.images.base_url + data.images.small + "/"
            },
            err => {
                console.log(err.message)
            }
        )
    }
    goTo(media_type, id){
        scope.$emit('hideSearchPanel', {});
        switch (media_type){
            case 'person':
                state.transitionTo('people', { id: id })
                break;
            case 'movie':
                state.transitionTo('movie_tv', { id: id, type: media_type })
                break
            case 'tv':
                state.transitionTo('movie_tv', { id: id, type: media_type })
                break
        }

    }
}

SearchPanelController.$inject = ['$scope', 'configurationService','$state']
