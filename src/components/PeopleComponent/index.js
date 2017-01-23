export default {
    bindings: {
        data: '='
    },

    // Inline template which is binded to message variable
    // in the component controller
    template: ` <div class="img-wrapper">
                    <img src="{{$ctrl.url + $ctrl.profile_path }}">
                </div>
                <div class="info-wrapper">
                    <h1>{{$ctrl.name}}</h1>
                    <h3>{{$ctrl.birthday }}</h3>
                    <p>{{$ctrl.biography}}</p>
                </div>
                <div class="table-wrapper">
                    <div class="movies-wrapper">
                        <h2>Movies</h2>
                        <table class="table">
                            <thead>
                                <th>Year</th>
                                <th>Title</th>
                                <th>Character</th>
                            </thead>
                            <tbody>
                                <tr ng-repeat="movie in $ctrl.castMovies">
                                    <td>{{movie.character}}</td>
                                    <td>{{movie.release_date}}</td>
                                    <td>{{movie.original_title}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tv-wrapper">
                        <h2>TV</h2>
                        <table class="table">
                            <thead>
                                <th>Year</th>
                                <th>Title</th>
                                <th>Character</th>
                            </thead>
                            <tbody>
                                <tr ng-repeat="movie in $ctrl.castMovies">
                                    <td>{{movie.character}}</td>
                                    <td>{{movie.release_date}}</td>
                                    <td>{{movie.original_title}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,

    // The controller that handles our component logic
    controller: 'peopleController'
}