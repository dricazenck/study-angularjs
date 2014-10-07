angular.module("order").controller("ProductController", function ($scope, $http, productsApi) {
    
    $scope.nameApp = ' ---Order Drinks---';

    $scope.loadingProducts = function() {
        productsApi.loadProducts().success(function(products, status){
            $scope.products = products;
        });
    };
    $scope.loadingProducts();
    
    $scope.defineOrderBy = function (field) {
        $scope.field = field;
        $scope.reverse = !$scope.reverse;
    };
});