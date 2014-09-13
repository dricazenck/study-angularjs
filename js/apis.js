angular.module("order").factory('productsApi', function($http) {

    var products = function() {
        return $http.get("http://localhost:3000/products");
    };

    var product = function() {
        return $http.post("http://localhost:8000/drinks");
    };

    return {
        loadProducts : products,
        addProduct : product
    };

});

angular.module("order").factory('ordersApi', function($http) {

    var orders = function() {
        return $http.get("http://localhost:3000/orders");
    };

    var order = function() {
        return $http.post("http://localhost:3000/orders");
    }

    return {
        loadOrders : orders,
        addOrder : order
    };

});