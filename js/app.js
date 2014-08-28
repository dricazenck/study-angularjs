(function() {

	var app = angular.module("order", []);
	
	app.controller("OrderController", function ($scope) {
		this.nameApp = ' ---Order Drinks---';
		this.nameApp = 'Make Order Drinks';

		this.order = createOrder('', "", [], 'Ok', new Date());
				
		this.products = [
			createProduct(1, "Frozen Marguarita", 18.5, 'A'), 
			createProduct(2, "Bloody Mary", 23, 'B'), 
			createProduct(3, "Sex on The Beach", 25.00, 'C'), 
			createProduct(4, "Marguarita", 15.35, 'C'), 
			createProduct(5, "Cosmopolitan", 21.50, 'D')
		];

		this.orders = [ 
			createOrder(1, "24", [createItems(this.products[0],1), createItems(this.products[4],2)], 'Ok', new Date()), 
			createOrder(2, "10", [createItems(this.products[1],2)], 'Cancel', new Date()), 
			createOrder(3, "02", [createItems(this.products[2], 1), createItems(this.products[3], 1)],'Ok', new Date())
		];

		this.addItem = function(item) {
			this.order.items.push(createItems(item.product, item.quantity));
			
			delete item.quantity;
			delete item.product;

			$scope.orderForm.$setPristine();	
		};

		this.finalizeOrder = function(order) {

			this.orders.push(createOrder(this.orders.length+1, order.table, order.items, order.status, new Date()));

			order.items = [];
			delete order.table;	
			delete order.date;	

			$scope.orderForm.$setPristine();	
		};

		this.cancelOrder = function(order) {
			order.status = 'Cancel';
		};

		this.deleteOrder = function(order) {
			this.orders.splice(order, 1);
		};

		this.showDetailsOrder = function(order) {
			this.details = order;
		};

		this.closeDetails = function() {
			delete this.details;
		}; 

		this.defineOrderByOrders = function (field) {
			this.fieldOrder = field;
			this.reverseOrder = !this.reverseOrder;
		};

		this.defineOrderBy = function (field) {
			this.field = field;
			this.reverse = !this.reverse;
		};
	});

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

