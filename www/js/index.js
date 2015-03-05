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
    .controller('MembersCtrl', function($scope, $http){
        console.log('in members ctrl');
        $scope.members;
        $scope.update = function(){

        }
        $http.get('/api/members')
            .success(function(data) {
                $scope.members = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    });