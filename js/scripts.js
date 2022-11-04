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

function Order( size, topping, price ) {
  this.size = { small: "small", medium: "medium", large: "large"}; 
  this.topping = {1: "anchovies", 2: "pineapple"};
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
  return this.size + " " + this.topping + " " + price;
}


Order.prototype.calculateOrder = function(){
    if(this.size === "small")
}

// Utility fx

function createCustomer(){
  const order = new Order( size, topping, price );
  const customer = new Customer( customerName );
  return customer; 
}

// list pp customers
function listCustomers(pizzaParlorDisplay) {
  Object.keys(pizzaParlorDisplay.customers).forEach(function(key) {
    const customer = pizzaParlorDisplay.findCustomer(key);
    console.log("display customer: ", )
 return customer.id
  });
}




