angular.module("order").controller("OrderController", function ($scope, $http, productsApi, ordersApi, $routeParams) {
    $scope.nameApp = ' ---Order Drinks---';
    $scope.nameApp = 'Make Order Drinks';

    $scope.order = createOrder('', "", [], 'Ok', new Date());

    $scope.loadingOrders = function() {
        ordersApi.loadOrders().success(function(data, status){
            $scope.orders = data;
        }).error(function (data, status){
            console.error(data);
        });
    };

    $scope.addOrder = function(order) {
        $http.post("http://localhost:8000/orders", order).success(function(data, status) {
            $scope.loadingOrders();      
        }).error(function (data, status){
            console.error(data);
        });
    };

    $scope.loadingDrinks = function() {
        productsApi.loadProducts().success(function(products, status){
            $scope.products = products;
        });
    };
    
    $scope.loadingDrinks();
    $scope.loadingOrders();

    $scope.addItem = function(item) {
        $scope.order.items.push(createItems(item.product, item.quantity));
        
        delete item.quantity;
        delete item.product;

        $scope.orderForm.$setPristine();    
    };

    $scope.finalizeOrder = function(order) {

        // $scope.orders.push(createOrder($scope.orders.length+1, order.table, order.items, order.status, new Date()));

        $scope.addOrder(order);

        order.items = [];
        delete order.table; 
        delete order.date;  

        $scope.orderForm.$setPristine();    
    };

    $scope.cancelOrder = function(order) {
        order.status = 'Cancel';
    };

    $scope.deleteOrder = function(order) {
        $scope.orders.splice(order, 1);
    };

    $scope.defineOrderByOrders = function (field) {
        $scope.fieldOrder = field;
        $scope.reverseOrder = !$scope.reverseOrder;
    };

    $scope.params = $routeParams;
    
    $scope.loadDetails = function (orders, id) {
        if (id) {
            orders.forEach(function (order){
                if (order.id == id) {
                    $scope.order = order;
                }
            });    
        }
    };
    
    if ($scope.params) {
       $scope.loadDetails($scope.orders, $scope.params.id);
    }
});

