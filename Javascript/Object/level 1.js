//first
const car1={
  make:'Honda', model:'Civic',year:2020
};
car1.model

//second
const shirt2={size:'large',material:'cotton'};
shirt2.color='red';
console.log(shirt2)

// Q3: Calculate the total price by multiplying the 'quantity' and 'price' properties of the 'product' object.
// Expected output:
// 400
const product3 = { name: 'Laptop', quantity: 2, price: 200 };
const total_price=product3.quantity*product3.price
console.log(total_price)

// // Q4: Update the value of the 'age' property in the 'person' object to 35.
// // Expected output:
// // { name: 'Alice', age: 35, city: 'New York' }
const person4 = { name: 'Alice', age: 30, city: 'New York' };
person4.age=45
console.log(person4)

// Q5: Remove the 'price' property from the 'book' object.
// Expected output:
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
const book5 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, price: 15 };
delete book5.price
console.log(book5)

// Q6: Retrieve the value of the 'department' property from the 'employee' object.
// Expected output:
// 'HR'
const employee6 = { name: 'John', age: 28, department: 'HR', salary: 60000 };
console.log(employee6.department)

//qn no 8
const person8 = { firstName: 'John', lastName: 'Doe', age: 25 };
const str= person8.firstName+' '+person8.lastName
console.log(str)


//qn no 9
const cart9 ={item:'book',quantity:2,total:30};
cart9.quantity+=1
console.log(cart9)

// Q10: Check if the 'price' property in the 'product' object is less than 100.
// Expected output:
// false
const product10 = { name: 'Phone', price: 150 };
const e=(product10.price<100) 
console.log(e)
