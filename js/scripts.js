// BI 
function Order ( size, toppings ) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.calculateSizePrice = function(){
  if(this.size === "small"){
    this.price = 5;
  } else if(this.size === "medium"){
    this.price = 10;
  } else if(this.size === "large"){
    this.price = 15;
    return this.price;
  }
}
Order.prototype.calculateToppingsPrice = function(){
  toppings.forEach(element => {
    return element.length * 2;
  });
}
// UI
