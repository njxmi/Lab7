

var items = [ 
	{name: "beans", 					    price: 0.99},
	{name: "rice", 					      price: 3.99},
	{name: "flour", 				      price: 1.99},
	{name: "truffle oil", 			  price: 7.25},
	{name: "spinach", 				    price: 2.00},
	{name: "artichokes", 			    price: 2.50},
	{name: "rotisserie chicken",	price: 5.99},
	{name: "almonds", 				    price: 9.99},	];

	items.forEach(function(items)){
		console.log(items.name + items.price);
	}0;
	
//code in original verison
/* function listGroceries(items) {
  var itemName = "";
  var itemPrice = 0;
  groceries.forEach(function(item) {
  itemName = items.name;
  itemPrice = items.price;
  }
  );
	}
		  console.log(itemName + itemPrice); */
		  
for each (var item in onbject) {
	sum += item;
}
console.log ("$" + sum); //total price of groceries
		  
		 
  
	
/* In Michigan sales tax is not actually collected on groceries, but may be used in this exercise regardless
*/