

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
function sorted(data){
    acendingSort=Object.values(data).sort()
    console.log(acendingSort)
