// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
function checkAge(ageOfPerson){
    if (ageOfPerson<=12)
        console.log('Child')
    else if (ageOfPerson>=13 && ageOfPerson<=19)
        console.log('Teen') 
    else if (ageOfPerson>=19 && ageOfPerson<=59)
        {
            console.log('Adult')
        }
    else {
        console.log('Senior')
    }
 }
checkAge(person1.age)

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
function total(inventory){
    const totalItems=inventory.apples+inventory.bananas+inventory.oranges;
    return totalItems;

}
const numberOfItems=total(inventory2)
console.log(numberOfItems)


// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
function arrOfStudents(students){
    const arr=Object.values(students)
    return arr
}
const ObjToArr=arrOfStudents(students3)
console.log(ObjToArr)


// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function checkNull(details){
    const value=Object.values(details).every( value => Boolean(value))
    return value;
}
isNull=checkNull(details4)
console.log(isNull)

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
function productArray(product){
    const arr=Object.entries(product)
    let i=0
    let total=0;
    while(i<arr.length){
        total+=arr[i][1].price;
        i+=1
    }
    const avg=total/arr.length
    return avg.toFixed(2)
}
arr1=productArray(products5)
console.log(arr1)

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
function highest(score){
    values=Object.values(score)
    max=Math.max(...values)
    return max
}
const highestMark=highest(scores6)
console.log(highestMark)


// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
function avgSalary(employeeSal){
   const employee=Object.entries(employeeSal)
   let total=0
   let i=0
   while(i<employee.length){
    total+= employee[i][1].salary
    i=i+1
   }
   const avg=total/employee.length
   return avg.toFixed(2)

}
const avgSal=avgSalary(employees7)
console.log(avgSal)

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
function sorted(data){
    acendingSort=Object.values(data).sort()
    console.log(acendingSort)

}
sorted(data8)

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
function totalCost(order){
    const total=order.quantity*order.price
    console.log(total)
}
totalCost(order9)

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
function totalCost(expenses){
    const price=Object.values(expenses)
    let i=0
    let total=0
    while(i<price.length)
        {
            total+=price[i]
            i+=1
        }
    console.log(total)
}
totalCost(expenses10)
