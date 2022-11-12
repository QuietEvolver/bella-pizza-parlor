// BI 
function Order ( size, toppings ) {
  this.size = size;
  this.toppings = [];
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
  const toppings = document.querySelectorAll("input[name='toppings']:checked").value;
  let order = new Order(size, toppings);
  order.push(toppings);
  
  // const toppings = Array.from(orderToppings);
  // toppings.forEach(()=>{ // elem
  //   const paragraph = document.createElement("p");
  //   paragraph.append(document.querySelectorAll(".toppings"));
  //   document.body.append(paragraph);
  // })

  
  // order.size;
  order.toppings;
  console.log("Size: ", size);
  order.calculateOrderPrice(size, toppings);
  console.log("Price: ", order.calculateOrderPrice(size));
  console.log("Toppings: ", order.toppings);
  // console.log("Order Toppings: ", orderToppings);


const output = document.querySelector(".price-output").innerText;


}

window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})