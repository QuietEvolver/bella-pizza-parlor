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

// UI
function handleFormSubmission(e){

  e.preventDefault();
  console.log("e: ", e);
  const size = document.querySelector("input[name='order-size']:checked").value;
  // const toppings = document.querySelector('.topping').checked;
  const orderToppings = document.querySelectorAll("input[name=toppings]:checked");
  console.log("Intake OrderToppings: ", orderToppings);
  // const toppings = Array.from(orderToppings);
  const toppings = [];
    if(document.getElementById("pepperoni").checked===true){
      toppings.push("pepperoni");
    } 
    if(document.getElementById("mushroom").checked===true){
      toppings.push("mushroom");
    }
    if(document.getElementById("anchovies").checked===true){
      toppings.push("anchovies");
    } 
    if (document.querySelectorAll(".toppings").checked === false){
      document.querySelectorAll(".toppings").innerHTML = "No toppings.";
    }
//   //   const paragraph = document.createElement("p");
//   //   paragraph.append(document.querySelectorAll(".toppings"));
//   //   document.body.append(paragraph);
//  // };
//   }
  
  let order = new Order(size, toppings);
  order.toppings;
  console.log("Size: ", size);
  order.calculateOrderPrice();
  let output = order.calculateOrderPrice(this.size, this.toppings);
  console.log("output price calc: ", output)
  document.getElementById("ouput", output);
  console.log("order.toppings: ", order.toppings);
  // console.log("Order Toppings: ", orderToppings);

  // const output = document.querySelector(".price-output").innerHTML;
  // document.querySelector(".size").innerText = order.size;
  // document.querySelector(".toppings").innerText = order.toppings;
  // document.querySelector(".price").innerText = price;
  document.querySelector('p').innerText = "Your order price is  $" + order.calculateOrderPrice(this.size, this.toppings) + " for a " + order.size + " " + order.toppings + " pizza.  " + "Thanks for your patronage!";
  // document.querySelector('p').removeAttribute("class")
}

window.addEventListener("load", ()=> {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
})