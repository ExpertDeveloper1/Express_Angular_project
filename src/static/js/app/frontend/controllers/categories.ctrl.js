'use strict';

(function() {
    var categoriesCtrl = function(scope, productsSvc){

      scope.Categories = productsSvc.query();

    };

    categoriesCtrl.$inject = ['$scope', 'ProductsSvc'];
    angular.module('MA').controller('CategoriesCtrl', categoriesCtrl);

})();