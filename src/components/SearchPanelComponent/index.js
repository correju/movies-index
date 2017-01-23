export default {
    bindings: {
        data: '='
    },

    // Inline template which is binded to message variable
    // in the component controller
    template: `<ul>
                    <li ng-repeat="data in $ctrl.data">
                        <div class="result-wrapper" ng-click="$ctrl.goTo(data.media_type,data.id)">
                            <img src="{{$ctrl.url + (data.poster_path || data.profile_path )}}">
                            <div class="title-container">
                                <span class="title">{{data.original_name || data.title || data.name}}</span>
                                <span>{{data.first_air_date}}</span>
                                <span>{{data.media_type}}</span>
                            </div>
                        </div>
                    </li>
                </ul>`,

    // The controller that handles our component logic
    controller: 'searchPanelController'
}