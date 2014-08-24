(function() {

	var app = angular.module("order", []);
	
	app.controller("OrderController", function ($scope) {
		this.nameApp = ' ---Order Drinks---';
		this.nameApp = 'Order Drinks';
		
		this.products = [
			createProduct(1, "Frozen Marguarita", 18.5, 'A'), 
			createProduct(2, "Bloody Mary", 23.00, 'B'), 
			createProduct(3, "Sex on The Beach", 25.00, 'C'), 
			createProduct(4, "Marguarita", 15.35, 'C'), 
			createProduct(5, "Cosmopolitan", 19.90, 'D')
		];

		this.orders = [ 
			createOrder(1, "24", [createItems(this.products[0],1), createItems(this.products[4],2)], 'Ok'), 
			createOrder(2, "10", [createItems(this.products[1],2)], 'Cancel'), 
			createOrder(3, "02", [createItems(this.products[2], 1), createItems(this.products[3], 1)],'OK')
		];

	});

})();