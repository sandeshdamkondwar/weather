'use strict';

angular
    .module('couponsApp')
    .controller('couponsCtrl', function($scope) {
        $scope.coupons = [{
            title: 'Upto 48% Off on Televisions',
            desc: 'Get upto 48% off on televisions. No coupon code required.'
        }, {
            title: 'Minimum 40% Off on Men\'s Sports Footwear',
            desc: 'Get minimum 40% off on sports footwear for men. No coupon code required.'
        }];
    });