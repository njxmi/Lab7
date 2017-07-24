//Lab 7 - Shopping cart program

var items = [ 
	{name: "beans", 					    price: 0.99},
	{name: "rice", 					      price: 3.99},
	{name: "flour", 				      price: 1.99},
	{name: "truffle oil", 			  price: 7.25},
	{name: "spinach", 				    price: 2.00},
	{name: "artichokes", 			    price: 2.50},
	{name: "rotisserie chicken",	price: 5.99},
	{name: "almonds", 				    price: 9.99},	];

	items.forEach(function(item){
		console.log(item.name + " $" + item.price);
	});
	
	var runningTotal = 0;
	items.forEach(function(item) {	
	
		runningTotal += item.price; //price of each grocery
		
	});

			console.log ("$" + runningTotal.toFixed(2));
	

//commented out code that wasn't working		  
//for each (var item in onbject) {
//	sum += item;
//}

		  
		 
  
	
/* In Michigan sales tax is not actually collected on groceries, but may be used in this exercise regardless
*/