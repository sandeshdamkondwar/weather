'use strict';

angular
    .module('couponsApp', [
        'ngRoute',
        'ngResource'
    ])
    .config(['$locationProvider', locationProvider])
    .config(['$routeProvider', routeProvider]);


    function routeProvider ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/city', {
                templateUrl: 'views/city.html',
                controller: 'cityCtrl'
            })
            .when('/coordinates', {
                templateUrl: 'views/coordinates.html',
                controller: 'coordinatesCtrl'
            })
            .when('/online', {
                templateUrl: 'views/online.html',
                controller: 'onlineCtrl'
            })
            .when('/flipkart', {
                templateUrl: 'views/merchant.html',
                controller: 'merchantCtrl'
            })
            .when('/amazon', {
                templateUrl: 'views/merchant.html',
                controller: 'merchantCtrl'
            })
            .when('/amazon/coupons', {
                templateUrl: 'views/coupons.html',
                controller: 'couponsCtrl'
            })
            .when('/flipkart/coupons', {
                templateUrl: 'views/coupons.html',
                controller: 'couponsCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
    }

    function locationProvider ($locationProvider) {
        $locationProvider.html5Mode(true);
    }