// BI 
function Order ( size, toppings ) {
  this.size = size;
  this.toppings = toppings; 
  this.price = 0;
}

Order.prototype.calculateOrderPrice = function(){
  if(this.toppings.price === 0){
    return this.size;
  }
  else if(this.size === "small"){
    this.price = 5 + (this.toppings.length *2);
    return this.price;
  } else if(this.size === "medium"){
    this.price = 10 + (this.toppings.length *2);
    return this.price;
  } else if(this.size === "large"){
    this.price = 15 + (this.toppings.length *2);
    return this.price;
  }
}

Order.prototype.selectedOrder = function(){
  console.log("I am in the function.");
  return "Your order price is  $" +  " for a " + this.size + " " + this.toppings + " pizza.  " + "Thanks for your patronage!"
}

// UI
function handleFormSubmission(e){

  e.preventDefault();
  console.log("e: ", e);
  const size = document.querySelector("input[name='order-size']:checked").value;
  console.log("size: ", size);
  const toppings = [];
  console.log("toppings: ", toppings);

  if(document.getElementById("pepperoni").checked===true){
    toppings.push("pepperoni");
  } 
  if(document.getElementById("mushroom").checked===true){
    toppings.push("mushroom");
  }
  if(document.getElementById("anchovies").checked===true){
    toppings.push("anchovies");
  } 
  
  let order = new Order(size, toppings);
  order.toppings;
  order.calculateOrderPrice();

  // let output = order.calculateOrderPrice(this.size, this.toppings);
  // document.querySelector('p').innerText = "Your order price is  $" + order.calculateOrderPrice(this.size, this.toppings) + " for a " + order.size + " " + order.toppings + " pizza.  " + "Thanks for your patronage!";
  let output = order.selectedOrder();
  document.getElementById("ouput", output);
  document.querySelector('p').innerText = `Your order is ${output.wholeOrder}`;
}

window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})