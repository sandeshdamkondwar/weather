'use strict';

angular
    .module('weatherApp')
    .controller('cityCtrl', function($scope, $resource) {

        var API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

        var Weather = $resource(API_PATH);

        $scope.checkWeather = function() {

            var city = {
                q: $scope.city
            };

            Weather.get(city, function(successResult) {
                $scope.weather = successResult;
            }, function(errorResult) {
                console.log('Error: ' + errorResult);
            });
        };
    });