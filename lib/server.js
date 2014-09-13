var createProduct = function (id, name, price, description) {
    return {
        id : id,
        description : description,
        name: name,
        price: price
    }
};

var createOrder = function (id, table, items, status, date) {
    var getTotal =function () {
        var total = 0;
        items.forEach(function (item){
             total += item.subtotal;
        });
        return total;
    };
    return {
        id : id ,
        table : table,
        date : date,
        items : items,
        status : status,
        getTotal : getTotal
    };
};

var createItems = function(product, quantity) { 
    var subtotal = product.price *  quantity;
    return {
        product : product,
        quantity: quantity, 
        subtotal: subtotal
    };
};

//inicializing objects
var products = [
    createProduct(1, "Frozen Marguarita", 18.5, 'A'), 
    createProduct(2, "Bloody Mary", 23, 'B'), 
    createProduct(3, "Sex on The Beach", 25.00, 'C'), 
    createProduct(4, "Marguarita", 15.35, 'C'), 
    createProduct(5, "Cosmopolitan", 21.50, 'D')
];

var orders = [ 
    createOrder(1, "24", [createItems(products[0],1), createItems(products[4],2)], 'Ok', new Date(2014,4,27,08,30,10)), 
    createOrder(2, "10", [createItems(products[1],2)], 'Cancel', new Date(2014,6,27,12,10,44)), 
    createOrder(3, "02", [createItems(products[2], 1), createItems(products[3], 1)],'Ok', new Date(2014,4,28,20,30,10))
];

var http = require('http');
var fs =  require('fs');
var qs = require('querystring')

var server = http.createServer(function (req, res) {    
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {'Content-Type':'text/plain'});

    if (req.method === 'GET') {

        res.end(defineRoutes(req));

    } else {
        
        var jsonString = '';
        res.on('data', function (data) {
            console.log("data --> "+jsonString);
            jsonString += data;
        });

        req.on('end', function () {
            console.log('jsonString -> '+jsonString);

            var post = qs.parse(jsonString)
            
            console.log("object --> "+post);
            console.log("json --> "+JSON.stringify(post));
        });
    
        req.on('error', function(e) {
            console.log('errors on request '+e.message);
        });
        
    }


}).listen(8000, 'localhost');

console.log("server is running at http://localhost:8000");

var defineRoutes = function (req) {

    if (req.url === '/drinks') {

        return JSON.stringify(products);

    } else if (req.url === '/orders') {
        
        return JSON.stringify(orders);    
    }

    return 'Hello NojeJS';
};
