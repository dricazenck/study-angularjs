(function() {

	var app = angular.module("order", []);
	
	app.controller("OrderController", function ($scope) {
		this.nameApp = ' ---Order Drinks---';
		this.nameApp = 'Order Drinks';

		this.order = createOrder('', "", [], 'Ok');
				
		this.products = [
			createProduct(1, "Frozen Marguarita", 18.5, 'A'), 
			createProduct(2, "Bloody Mary", 23.00, 'B'), 
			createProduct(3, "Sex on The Beach", 25.00, 'C'), 
			createProduct(4, "Marguarita", 15.35, 'C'), 
			createProduct(5, "Cosmopolitan", 21.50, 'D')
		];

		this.orders = [ 
			createOrder(1, "24", [createItems(this.products[0],1), createItems(this.products[4],2)], 'Ok'), 
			createOrder(2, "10", [createItems(this.products[1],2)], 'Cancel'), 
			createOrder(3, "02", [createItems(this.products[2], 1), createItems(this.products[3], 1)],'OK')
		];

		this.addItem = function(item) {
			this.order.items.push(createItems(item.product, item.quantity));
			delete item.quantity;
			delete item.product;
		};

		this.finalizeOrder = function(order) {

			this.orders.push(createOrder(this.orders.length+1, order.table, order.items, order.status));

			order.items = [];
			delete order.table;		
		};

		this.isDisabled = function (item, order) {

			return (order.table.length == 0
				|| !item || !item.product || !item.quantity);

		};
	});

})();

