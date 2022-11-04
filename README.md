
# Bella Pizza Parlor

#### By Vera Weikel

#### A Pizzeria  Storefront App

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost. Here is the [repo](https://github.com/QuietEvolver/bella-pizza-parlor.git)

### Objectives 
* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

### Goals
- To have have a pizza parlor {}
- To have have customers by id {}
- To have have customers able to order specific toppings {}, and pizza sizes{}

## Tests
```
// (example of FINAL FXN BLOCK test)
** Describe: Pizza()           
// Describe statement is listed once, for a single function
// For multiple pieces of functionality, write multiple tests (as many as are needed) under the same Describe bloc
** Test: "It should return a Pizza object with two properties for toppings and size"
** Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
** Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

// PROTOTYPE METHODS
// prototype methodS on objects, have a separate Describe statement, along with any tests.


// HAVE A PIZZA PARLOR {}
Describe: PizzaParlor()           
Test: "It should create a pizza parlor object with two keys: customer and id"
Code: const pizzaParlor = function PizzaParlor({ "Angela", 0; }) 
Expected Output: PizzaParlor { customers: "Angela", currentId: 1 }

// HAVE CUSTOMERS {}
Describe: Customer()           
Test: "It should create a customer object with two keys: customer and order"
Code: const customer = new Customer (customerName = "Angela"; order = 1; };
Expected Output: Customer { customerName: "Angela", order: 1 }

// HAVE PIZZA ORDER {}
Describe: order()           
Test: "It should create a pizza order object with two keys: size and type"
Code: let order = new Order({size:"small"}; 
  anchovies: "anchovies", pineapple: "pineapple"};)
order.size.small;
order.size.anchovies;
Expected Output: order { size: "samll", toppings: "anchovies" }

// PIZZA PARLOR: prototypes CUST TO PP
Describe: PizzaParlor.prototype.assignId()           
Test: "It should create a customer on the pizza order object with two keys: name and customerId."
Code: addCustomer(customer);
Expected Output: customer{customers:{}, 1};

Describe: PizzaParlor.prototype.customerId()           
Test: "It should create a customer on the pizza order object with two keys: name and customerId."
Code: addCustomer(cusomer);
pizzaparlor.addCustomer = ("Angela");
Expected Output: customer {customers:{}, 1};
 
Describe: PizzaParlor.prototype.findCustomer()           
Test: "It should find a customer on the pizza order object by customerId."
Code: findCustomer(id);
pizzaparlor.findCustomer = ("Angela");
Expected Output: customer {customers:{}, 0};

Describe: PizzaParlor.prototype.updateCustomer()           
Test: "It should delete a customer on the pizza order object by customers id."
Code: deleteCustomer(customers);
pizzaparlor.deleteCustomer = ("Angela");
Expected Output: {}




// UPDATE CUSTOMER tba
Describe: PizzaParlor.prototype.updateCustomer()           
Test: "It should update a customer on the pizza order object by customers id."
Code: updateCustomer(customers);
pizzaparlor.updateCustomer = ("Angela");
Expected Output: customer {customers:{}, 0};

// ORD TO CUST
Describe: Customer.prototype.order()           
Test: "It should create a pizza order object on the customer  with two properties: type and size."
Code: 
Expected Output: 
```
## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.