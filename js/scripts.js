// BI 
function Order ( size, toppings ) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.calculateOrderPrice = function(){
  if(this.size === "small"){
    this.price = 5 + (this.toppings.length);
  } else if(this.size === "medium"){
    this.price = 10 + (this.toppings.length);
  } else if(this.size === "large"){
    this.price = 15 + (this.toppings.length);
    return this.price;
  }
}

// UI


window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})