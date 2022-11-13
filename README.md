
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

Describe: Order()           
Test: "It should create a pizza order object with three keys: size, toppings, price."
Code: const myOrder = new Order(["anchovies", "pineapple"], "medium", 0);
Expected Output: Order { toppings: ['anchovies', 'pineapple'], size: "medium", price: 0; }

Describe: Order.prototype.calculateSizePrice();
Test: "It should calculate an order based on size."
Code: calculateOrderPrice("small", ["basil"])
Expected Output:size: {'small', [toppings: 'basil'], price: 5};

Describe: Order.prototype.calculateToppingsPrice();
Test: "It should calculate an order based on toppings."
Code: calculateOrderPrice("medium", ["basil"])
Expected Output:size: {'medium', [toppings: 'basil'], price: 2};

Describe: Order.prototype.calculateOrderPrice();
Test: "It should calculate an order based on size plus toppings."
Code: calculateOrderPrice("medium", ["anchovies", "pineapple"])
Expected Output:size: {'medium', [toppings: 'anchovies','pineapple'], price: 12};

Test: "It should calculate an order based on size plus toppings."
Code: calculateOrderPrice("large", [0])
Expected Output:size: {'large', [], price: 15};

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