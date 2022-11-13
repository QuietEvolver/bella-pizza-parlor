// BI 
function Order ( size, toppings ) {
  this.size = size;
  this.toppings = toppings; 
  this.price = 0;
}

Order.prototype.calculateOrderPrice = function(e){
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
  const size = document.querySelector("input[name='order-size']:checked").value;
  // const toppings = document.querySelector('.topping').checked;
  const orderToppings = document.querySelector(".toppings").value;
  console.log("Intake OrderToppings: ", orderToppings);
  // const toppings = Array.from(orderToppings);
  const toppings = [];
  toppings.push(orderToppings);
  let checkedOrderToppings = this.orderToppings;
  // for(let i = 0; i<checkedOrderToppings.length; i++){ 
  //   if(document.getElementById("pepperoni").checked===true){
  //     toppings.push("pepperoni");
  //   }
  console.log("checked order toppings: ", 
  checkedOrderToppings)
  //   const paragraph = document.createElement("p");
  //   paragraph.append(document.querySelectorAll(".toppings"));
  //   document.body.append(paragraph);
 // };

  
  let order = new Order(size, toppings);
  // order.size;
  order.toppings;
  console.log("Size: ", size);
  order.calculateOrderPrice(size, toppings);
  console.log("order.prototype.calcPrice: ", order.calculateOrderPrice(size, toppings));
  console.log("order.toppings: ", order.toppings);
  // console.log("Order Toppings: ", orderToppings);

  // const output = document.querySelector(".price-output").innerHTML;
  // document.querySelector(".size").innerText = order.size;
  // document.querySelector(".toppings").innerText = order.toppings;
  // document.querySelector(".price").innerHTML = price;

}

window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})