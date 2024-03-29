var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  function calculateSalesTotals(sales) {
    var updatedSales = [];
    for (var i = 0; i < sales.length; i++) {
      var currentSale = sales[i];
      var updatedItem = {};
      if (currentSale.discount) {
         updatedItem.discount = currentSale.discount;
      }
      updatedItem.item = currentSale.item;
      updatedItem.original = currentSale.original;
      if (currentSale.discount) {
      updatedItem.sale = currentSale.original * (1 - currentSale.discount);
      }
      else{
        updatedItem.sale = currentSale.original;
      }
      updatedItem.stock = currentSale.stock;
      updatedItem.total = updatedItem.sale * currentSale.stock;
      updatedSales.push(updatedItem);
    }
    return updatedSales;
  }
  var updatedSales = calculateSalesTotals(sales);
  console.log(updatedSales);