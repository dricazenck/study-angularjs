var createProduct = function (id, name, price, description) {
    
    var toString = function () {
        return id + " - " + name;
    }

    return {
        id : id,
        description : description,
        name: name,
        price: price,
        toString : toString
    }
};

var createOrder = function (id, table, items, status) {
    
    var total = 0;
    items.forEach(function (item){
         total += item.subtotal;
    });
 
    return {
        id : id ,
        table : table,
        items : items,
        status : status,
        total : total
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