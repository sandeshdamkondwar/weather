'use strict';

angular
    .module('couponsApp')
    .controller('homeCtrl', function($scope) {
        $scope.merchants = [{
            name: 'flipkart',
            url: '/flipkart'
        }, {
            name: 'amazon',
            url: '/amazon'
        }];
    });