let SEARCHSERVICE;
let CONFIGSERVICE;
export default class SearchController {
    constructor ($scope, searchService, configurationService) {
      SEARCHSERVICE = searchService
      CONFIGSERVICE = configurationService
      configurationService.getConfPromise().then(
        response => {
          this.show = false
          console.log()
        },
        err =>{
          console.log(err.message)
        }
      )
      this.show = true
      this.showPanel = false
      this.data = []
      this.searchText = ""
      $scope.$on('hideSearchPanel', (event, data) => {
        this.showPanel = false
        this.searchText = ""
      })
    }
    search(){
      let searchService = SEARCHSERVICE
      if (this.searchText !== ""){
            this.showPanel = true

        searchService.search(this.searchText).then(
          response => {
            this.data = response.data.results
          },
          err=>{
            console.log(err.message)
          }
        )
      } else {
        this.showPanel = false
        this.data = []
      }
    }
}

SearchController.$inject = ['$scope','searchService','configurationService']