function PizzaParlor() {
  this.customers = {};
  this.currentId = 0;
}

function Customer( customerName, order) {
  this.customerName = customerName;
  this.order = order;
}

