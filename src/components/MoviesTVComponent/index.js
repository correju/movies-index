export default {
    bindings: {
        data: '='
    },

    // Inline template which is binded to message variable
    // in the component controller
    template: ` <div class="img-wrapper">
                    <img src="{{$ctrl.url + $ctrl.poster_path }}">
                </div>
                <div class="info-wrapper">
                    <h1>{{$ctrl.title}}</h1>
                    <h3>{{$ctrl.release_date }}</h3>
                    <p>{{$ctrl.overview}}</p>
                </div>`,

    // The controller that handles our component logic
    controller: 'moviesTVController'
}