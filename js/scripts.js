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
} // pizzaparlor.addCustomer = ("Angela");

PizzaParlor.prototype.findCustomer = function(id) {
  if (this.customer[id] !== undefined) {
    return this.customers[id];
  }
  return false;
} // pp.findCustomer[id=0])

PizzaParlor.prototype.updateContact = function (contacts){
  let currentId = contacts[this.currentId];
  if( this.contacts[currentId] === undefined){
    return false;
  } else if ( this.contacts[currentId] !== undefined) {
    this.contacts[currentId].contactName = editFirstName;
    this.contacts[currentId].order = {};
  }
}
