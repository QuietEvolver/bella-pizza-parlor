function PizzaParlor() {
  this.customers = {};
  this.currentId = 0;
}

function Customer( customerName, order ) {
  this.customerName = customerName;
  this.order = order;
}

function Order( size, type ) {
  this.size = { small: "small", medium: "medium", large: "large"}; 
  this.type = {anchovies: "anchovies", anchovies: "pineapple"};
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaParlor.prototype.addCustomer = function(customer){
  customer.id = this.assignId();
  this.customers[customer.id] = customer;
}