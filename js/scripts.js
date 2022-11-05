// BI 
function PizzaParlor() {
  this.customers = {};
  this.currentId = 0;
}

function Customer( currentId, customerName, order ) {
  this.currentId = currentId;
  this.customerName = customerName;
  this.order = order;
}

function Order( size, toppings, price ) {
  this.size = { small: "small", medium: "medium", large: "large"}; 
  this.toppings = toppings;
  this.price = 0;
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaParlor.prototype.addCustomer = function(customer){
  customer.id = this.assignId();
  this.customers[customer.id] = customer;
} // pizzaparlor.addCustomer = ("Angela");

PizzaParlor.prototype.findCustomer = function(id) {
  if (this.customers[id] !== undefined) {
    return this.customers[id];
  }
  return false;
} // pp.findCustomer[id=0])

PizzaParlor.prototype.deleteCustomer = function(id){
  if (this.customers[id] === undefined) {
    return false;
  }
  delete this.customers[id];
  return true;
}

Customer.prototype.customerOrderName = function(){
  return this.customerName; 
}

Order.prototype.fullOrder = function(){
  return this.size + " " + this.toppings + " " + price;
}

Order.prototype.calculateOrder = function(){
  if(this.size === "small"){
    this.price = 5 + (this.toppings.length);
  } else if(this.size === "medium"){
    this.price = 10 + (this.toppings.length);
  } else if(this.size === "large"){
    this.price = 15 + (this.toppings.length);
    return this.price;
  }
}
 /* let msgprice = 0;
` let inputValue = e.currentTarget
  (function inputValueFx(inputValue){
    switch(inputValue) {
      case 1:
        msgprice = 5
        break;
      case 2:
        msgprice = 10
        break;
      case 3:
        msgprice = 15
        break;
      default:
        msgprice = 0
        return msgprice; 
    }
  })();*/

// Utility fx

function createCustomer(){
 //  const order = new Order( size, toppings, price );
  const customerName = document.getElementById("customer-name").value;
  const customer = new Customer( customerName );
  console.log("fx createCustomer: ", customer);
  return customer; 
}

function listCustomers(pizzaParlorDisplay) {
  Object.keys(pizzaParlorDisplay.customers).forEach(function(key) {
    const customer = pizzaParlorDisplay.findCustomer(key);
    console.log("display customer: ", )
 return customer.id
  });
}

const pizzaParlor = new PizzaParlor();

function handleFormSubmission(e){
  e.preventDefault(); 
  // console.log("incoming e", e);
  // e = SubmitEvent;
  // console.log("SubmitEvent e", e);
  const form = document.querySelector("form");
  const log = document.querySelector("#log");

  pizzaParlor.addCustomer(createCustomer()); 
  form.addEventListener(
    "submit",
    (event) => {
      const data = new FormData(form);
    console.log("(e)=>data = new FormData: ", data);
      let output = "";
      for (const entry of data) { // FormDataEntryValue
        output = `${output}${entry[0]}=${entry[1]}\r`;
      }
      log.innerText = output;
      console.log("output: ", output);
      console.log("e, form, log", event, form, log); 
      event.preventDefault(); // }
    },
    false
  ); 
}

window.addEventListener("load", function(){
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});



