(function() {

	var app = angular.module("order", ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when('/', { templateUrl: 'views/products.html', controller:'ProductController'});
		$routeProvider.when('/products', { templateUrl: 'views/products.html', controller:'ProductController'});
		$routeProvider.when('/order', { templateUrl: 'views/order.html', controller:'OrderController'});
		$routeProvider.when('/orders', { templateUrl: 'views/orders.html', controller:'OrderController'});
		$routeProvider.when('/order-details/:id', { templateUrl: 'views/order-details.html', controller:'OrderController'});
	});
	
	/** a sample for create filter **/
	app.filter("exclamation", function () {	
		return function (word, size) { 
			var _size = 1;
			if (size) {
				_size = size; 
			}
			return word+new Array(_size+1).join("!");
		};	
	});
  
})();

