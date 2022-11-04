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

PizzaParlor.prototype.deleteCustomer = function(id){
  if (this.customers[id] === undefined) {
    return false;
  }
  delete this.customers[id];
  return true;
}




// MUST STILL PASS THE (e)
// PizzaParlor.prototype.updateContact = function (contacts){
//   let currentId = contacts[this.currentId];
//   if( this.contacts[currentId] === undefined){
//     return false;
//   } else if ( this.contacts[currentId] !== undefined) {
//     this.contacts[currentId].contactName = editFirstName;
//     this.contacts[currentId].order = {};
//   }
// }

// list pp customers
function listCustomers(pizzaParlorDisplay) {
  Object.keys(pizzaParlorDisplay.customers).forEach(function(key) {
    const customer = pizzaParlorDisplay.findCustomer(key);
    console.log("display customer: ", )
 return customer.id
  });
}



