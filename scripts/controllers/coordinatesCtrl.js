'use strict';

angular
    .module('couponsApp')
    .controller('coordinatesCtrl', function($scope, Weather) {
        $scope.checkWeather = function() {
            var coordinates = {
                lat: $scope.lat,
                lon: $scope.lon
            };

            $scope.weather = Weather.getWeather(coordinates);
        };
    });