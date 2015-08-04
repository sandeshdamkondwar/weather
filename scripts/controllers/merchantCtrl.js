'use strict';

angular
    .module('couponsApp')
    .controller('merchantCtrl', function($scope) {
        $scope.merchantCouponsLink = window.location + "/coupons";
    });