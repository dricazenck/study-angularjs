angular.module("order").directive("menu", function () { 
    
    return { 
        templateUrl: 'views/directive/menu.html',
        restrict: 'E', 
        scope: {
            page: '@'
        },
        controller: function($scope) {
            var items = $scope.items = [ {name: 'Products', link: '#/', page: 'products', selected: true},
                {name: 'Make a order', link: '#/order', page: 'order', selected: false},
                {name: 'Orders', link: '#/orders', page: 'orders',selected: false}
            ];

            angular.forEach(items, function(item) {
                if (item.page === $scope.page) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            });
            
            $scope.select = function(item) {
              angular.forEach(items, function(item) {
                item.selected = false;
              });
              item.selected = true;
            };
        },
    };  
});