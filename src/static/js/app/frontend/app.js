'use strict';

// Declare app level module which depends on filters, and services
angular.module('ma', ['ma.common']).
    config(['$routeProvider', function(routeProvider) {
        routeProvider.when('/', {templateUrl: '/partial/frontend/categories', controller: 'CategoriesCtrl'});
        routeProvider.when('/category/:id', {templateUrl: '/partial/frontend/products', controller: 'ProductsCtrl'});
    }]);