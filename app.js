(function() {

	var app = angular.module("order", []);


	app.controller("OrderController", function ($scope) {

		this.nameApp = 'Order Drinks'
		this.products = products;
		this.orders = orders;

	});

	var products = [
		{ id: 1, name: "Frozen Marguarita", price: 18.5, description: 'A'}, 
		{ id: 2, name: "Bloody Mary", price: 23.00, description: 'B' }, 
		{ id: 3, name: "Sex on The Beach", price: 25.00, description: 'C'}, 
		{ id: 4, name: "Marguarita", price: 15.35, description: 'C'}, 
		{ id: 5, name: "Cosmopolitan",  price:19.90, description: 'D' }
	];

	var orders = [
		{ id: 1, table: "24", products: [{id : 1, amount: 1}, {id: 5, amount:2}], status: 'Ok'}, 
		{ id: 2, table: "10", products: [{id : 2, amount: 2}], status: 'Cancel'}, 
		{ id: 3, table: "02", products: [{id : 5, amount: 1}, {id: 2, amount:1}], status: 'OK'}
	];

})();