define([
    'angular-couch-potato',
    'angular-ui-router',
    'angular-ui-bootstrap-tpls',//模态框出处
    'angular-shiro',
    'angular-cookies',
    'app/config/app.route',
    'layui'
], function(couchPotato) {
    var app = angular.module('app', ['scs.couch-potato', 'ui.router','route']); //必须得注入ui.router才能使用$stateProvider

    couchPotato.configureApp(app);//app模块使用懒加载

    app.config(['$stateProvider', '$urlRouterProvider', '$couchPotatoProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $couchPotatoProvider,$httpProvider) {
        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // $urlRouterProvider.otherwise("home");
    }]);

    app.run(['$couchPotato', '$state', '$stateParams', '$rootScope', 
        function($couchPotato, $state, $stateParams, $rootScope) {

            app.lazy = $couchPotato;//app模块使用懒加载

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {//前端路由跳转后回调

            });

            // $state.go('home');
        }
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, [app['name'], function() {
            angular.element(document).find('html').addClass('ng-app');
        }]);
    });

    return app;
});