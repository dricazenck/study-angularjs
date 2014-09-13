angular.module("order").controller("ProductController", function ($scope, $http, productsApi) {
    
    $scope.nameApp = ' ---Order Drinks---';
    $scope.nameApp = 'Make Order Drinks';

    $scope.order = createOrder('', "", [], 'Ok', new Date());
            
    $scope.loadingDrinks = function() {
        productsApi.loadProducts().success(function(products, status){
            $scope.products = products;
        });
    };
    
    $scope.loadingDrinks();
    
    $scope.defineOrderBy = function (field) {
        $scope.field = field;
        $scope.reverse = !$scope.reverse;
    };
});