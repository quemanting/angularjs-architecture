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
    .state('home.front_end_specification', {
        url: "/front_end_specification",
        templateUrl: 'app/document/front_end_specification/front_end_specification.html',
        controller: 'fontEndSpecificationCtrl',
        resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['app/document/front_end_specification/front_end_specification.ctrl.js'])
        }
    })
});

