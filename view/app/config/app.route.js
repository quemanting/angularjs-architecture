angular.module("route",[])
.config(function($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl',
        resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['app/home/home.js'])
        }
    })
    .state('home.test', {
        url: "/test",
        templateUrl: 'app/test/test.html',
        controller: 'testCtrl',
        resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['app/test/test.js'])
        }
    })
});

