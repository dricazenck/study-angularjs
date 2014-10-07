angular.module("order").factory('productsApi', function($http) {

    var products = function() {
        return $http.get("http://localhost:3000/products");
    };

    return {
        loadProducts: products
    };

});

angular.module("order").factory('ordersApi', function($http) {

    var orders = function() {
        return $http.get("http://localhost:3000/orders");
    };

    var order = function(order) {
        return $http.post("http://localhost:3000/orders", order);
    }

    return {
        loadOrders: orders,
        addOrder: order
    };

});