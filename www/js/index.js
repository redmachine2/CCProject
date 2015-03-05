angular.module('corps', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'HomeCtrl'
            })
            .when('/forums', {
                templateUrl: 'forums/index.php'
            })
            .when('/members',{
                templateUrl: 'pages/members.html',
                controller: 'MembersCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])
    .controller('HomeCtrl', function ($scope) {
        $scope.world = 'World';
        console.log('test');
    })
    .controller('MembersCtrl', function($scope){
        $scope.members = [
            {name: 'Fred', id: 123},
            {name: 'Bob', id: 321}
        ];
    });