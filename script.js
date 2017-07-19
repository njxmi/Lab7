

var items = [ 
	{name: "beans", 					    price: 0.99},
	{name: "rice", 					      price: 3.99},
	{name: "flour", 				      price: 1.99},
	{name: "truffle oil", 			  price: 7.25},
	{name: "spinach", 				    price: 2.00},
	{name: "artichokes", 			    price: 2.50},
	{name: "rotisserie chicken",	price: 5.99},
	{name: "almonds", 				    price: 9.99},	];

//original code
/*	function listGroceries(items) {
  var itemName = "";
  var itemPrice = 0;
  groceries.forEach(function(item) {
  itemName = items.name;
  itemPrice = items.price;
  }
  );
	}
		  console.log(itemName + itemPrice);
		  
		  */
  
	
//trying to set up list of items, some of which are subject to sales tax

var totalBill = 0;


totalCost += getPriceOfChicken(priceTax);

console.log("Your total is $" + totalCost.toFixed(2));

function getPriceOfChicken(isCooked, addTax) {
    var priceTax;
    if (isCooked) {
        priceTax = 5.99;
    } else {
        priceTax = 3.99;
    }
    if (addTax) {
        priceTax += (priceTax * 1.06);
    }
    return priceTax;
}



function getPriceOfItem(choice) {
  switch (choice) {
      case "beans":
		return 0.99;
      case "rice":
		return 3.99;
      case "flour":
		return 1.99
      case "truffle oil":
          return 7.25
      case "spinach":
		return 2.00
      case "artichokes":
          return 2.5;
      case "almonds":
          return 9.99
  }
}

function calcTotal(subtotalNonTaxable){
  return subtotalTaxable + ;  
}