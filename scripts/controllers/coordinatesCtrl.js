'use strict';

angular
    .module('weatherApp')
    .controller('coordinatesCtrl', function($scope, $resource) {

        var API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

        var Weather = $resource(API_PATH);

        $scope.checkWeather = function() {

            var coordinates = {
                lat: $scope.lat,
                lon: $scope.lon
            };

            Weather.get(coordinates, function(successResult) {
                $scope.weather = successResult;
            }, function(errorResult) {
                console.log('Error: ' + errorResult);
            });
        };
    });