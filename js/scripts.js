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

function Order( size, type ) {
  this.size = { 1: "small", 2: "medium", 3: "large"}; 
  this.type = {1: "anchovies", 2: "pineapple"};
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
  return this.size + " " + this.type;
}

// Utility fx
function createCustomer(){
  const order = new Order( size, type );
  const customer = new Customer( customerName );
  return customer; 
}



