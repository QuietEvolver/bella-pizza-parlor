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
function handleFormSubmission(e){
  e.preventDefault();
  console.log("e: ", e);
  // const size = document.querySelector("input[name='order-size']:radio");
  // const toppings = document.querySelector('.topping').checked;
  const orderToppings = document.querySelectorAll("input[name='toppings']:checked");
  
  const toppings = Array.from(orderToppings);
  toppings.forEach(()=>{ // elem
    const paragraph = document.createElement("p");
    paragraph.append(document.getElementsByName("toppings.name"));
    document.body.append(paragraph);
  })

  // toppings.forEach(function())
  let order = new Order();
  // order.size;
  order.toppings;
  console.log("Toppings: ", toppings);
  console.log("Order Toppings: ", orderToppings);
  order.calculateOrderPrice(toppings);
  console.log("Price: ", order.calculateOrderPrice(toppings));

}

window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})